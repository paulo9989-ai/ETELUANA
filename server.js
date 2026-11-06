require('dotenv').config();
const express = require('express');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const { readPerson } = require('./lib/person');

const app = express();
const port = Number(process.env.PORT) || 3000;
const databaseName = process.env.DATABASE_NAME || 'historias';
const collectionName = process.env.COLLECTION_NAME || 'historias';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));
app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public')));

let collection;

function ensureDatabase(req, res, next) {
  if (!collection) return res.status(503).send('Banco de dados indisponível. Verifique a conexão com o MongoDB e reinicie a aplicação.');
  next();
}
function validId(id) { return ObjectId.isValid(id) && String(new ObjectId(id)) === id; }


app.get('/health', (req, res) => res.status(collection ? 200 : 503).json({ status: collection ? 'ok' : 'database_unavailable' }));
app.get('/', (req, res) => res.redirect('/index'));
app.get('/index', (req, res) => res.render('index', { error: null }));

app.get('/show', ensureDatabase, async (req, res, next) => {
  try {
    const crud = await collection.find({}).sort({ _id: -1 }).toArray();
    res.render('show', { crud });
  } catch (error) { next(error); }
});

app.post('/show', ensureDatabase, async (req, res, next) => {
  try {
    const result = readPerson(req.body);
    if (result.error) return res.status(400).render('index', { error: result.error });
    await collection.insertOne({ ...result.person, createdAt: new Date(), updatedAt: new Date() });
    res.redirect('/show');
  } catch (error) { next(error); }
});

app.get('/edit/:id', ensureDatabase, async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).send('ID inválido.');
    const crud = await collection.findOne({ _id: new ObjectId(req.params.id) });
    if (!crud) return res.status(404).send('Registro não encontrado.');
    res.render('edit', { crud, error: null });
  } catch (error) { next(error); }
});

app.post('/edit/:id', ensureDatabase, async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).send('ID inválido.');
    const result = readPerson(req.body);
    const filter = { _id: new ObjectId(req.params.id) };
    if (result.error) {
      const crud = await collection.findOne(filter);
      if (!crud) return res.status(404).send('Registro não encontrado.');
      return res.status(400).render('edit', { crud, error: result.error });
    }
    const update = await collection.updateOne(filter, { $set: { ...result.person, updatedAt: new Date() } });
    if (!update.matchedCount) return res.status(404).send('Registro não encontrado.');
    res.redirect('/show');
  } catch (error) { next(error); }
});

app.post('/delete/:id', ensureDatabase, async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).send('ID inválido.');
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (!result.deletedCount) return res.status(404).send('Registro não encontrado.');
    res.redirect('/show');
  } catch (error) { next(error); }
});

app.use((req, res) => res.status(404).send('Página não encontrada.'));
app.use((error, req, res, next) => {
  console.error(error);
  if (res.headersSent) return next(error);
  res.status(500).send('Erro interno no servidor. Confira o terminal para mais detalhes.');
});

async function start() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL não configurada. Copie .env.example para .env e configure o MongoDB.');
  const client = new MongoClient(url, { serverSelectionTimeoutMS: 10000 });
  await client.connect();
  const db = client.db(databaseName);
  collection = db.collection(collectionName);
  const server = app.listen(port, () => console.log(`Servidor funcionando em http://localhost:${port}`));
  const shutdown = async () => {
    server.close();
    await client.close();
    process.exit(0);
  };
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
  return { server, client };
}

if (require.main === module) {
  start().catch(error => {
    console.error('Falha ao iniciar:', error.message);
    process.exit(1);
  });
}
module.exports = { app, start };
