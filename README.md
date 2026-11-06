# API CRUD de pessoas

Projeto Node.js + Express + EJS + MongoDB para cadastrar, listar, editar e excluir pessoas.

## Requisitos
- Node.js 20 ou superior
- MongoDB local em execução ou uma conta/cluster MongoDB Atlas

## Instalação no Windows (VS Code)
1. Extraia o ZIP e abra a pasta do projeto no VS Code.
2. No terminal, execute `npm install`.
3. Copie `.env.example` para `.env` (`copy .env.example .env` no CMD/PowerShell).
4. Abra `.env` e configure `DATABASE_URL`. Para MongoDB local, mantenha `mongodb://127.0.0.1:27017`, desde que o MongoDB esteja instalado e ligado.
5. Execute `npm start`.
6. Acesse `http://localhost:3000`.

Para desenvolvimento com reinício automático: `npm run dev`.

## Rotas
- `GET /` ou `/index`: formulário de cadastro
- `POST /show`: cadastra uma pessoa
- `GET /show`: lista pessoas
- `GET /edit/:id`: formulário de edição
- `POST /edit/:id`: atualiza uma pessoa
- `POST /delete/:id`: exclui uma pessoa
- `GET /health`: verifica o estado da conexão com o banco

## Testes
Execute `npm test` para verificar a sintaxe dos arquivos JavaScript por meio do Node.js.

## Problemas comuns
- `DATABASE_URL não configurada`: crie o arquivo `.env` a partir do `.env.example`.
- `ECONNREFUSED 127.0.0.1:27017`: inicie o serviço MongoDB ou use uma URL válida do Atlas.
- Erro de autenticação no Atlas: confira usuário, senha, permissões e Network Access no painel do Atlas.
- Porta em uso: altere `PORT` no `.env`.
