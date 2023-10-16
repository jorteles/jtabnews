const { somar } = require("../../models/calculadora.js");
const calculadora = require("../../tests/unit/calculadora.js");

test("Somar 2 + 2", () => {
  const resultado = somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deveria retornar 105", () => {
  const resultado = somar(5, 100);
  expect(resultado).toBe(105);
});

test("Somar 'banana' + 100  deveria retornar 'Erro'", () => {
  const resultado = somar("banana", 100);
  expect(resultado).toBe("Erro");
});
