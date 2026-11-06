const test = require('node:test');
const assert = require('node:assert/strict');
const { readPerson } = require('../lib/person');

test('aceita nome e sobrenome e remove espaços extras', () => {
  assert.deepEqual(readPerson({ name: '  Ana ', surname: ' Silva  ' }), {
    person: { name: 'Ana', surname: 'Silva' }
  });
});

test('rejeita campos vazios', () => {
  assert.match(readPerson({ name: 'Ana', surname: ' ' }).error, /Preencha/);
});

test('rejeita campos acima de 120 caracteres', () => {
  assert.match(readPerson({ name: 'a'.repeat(121), surname: 'Silva' }).error, /120/);
});
