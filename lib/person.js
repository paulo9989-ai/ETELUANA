function readPerson(body = {}) {
  const name = String(body.name || '').trim();
  const surname = String(body.surname || '').trim();
  if (!name || !surname) return { error: 'Preencha nome e sobrenome.' };
  if (name.length > 120 || surname.length > 120) return { error: 'Nome e sobrenome devem ter no máximo 120 caracteres.' };
  return { person: { name, surname } };
}
module.exports = { readPerson };
