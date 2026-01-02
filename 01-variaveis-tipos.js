// Variáveis e Tipos de Dados em JavaScript
// --------------------------------------
// Em JavaScript, usamos var, let ou const para declarar variáveis.
// Tipos primitivos: string, number, boolean, null, undefined, symbol, bigint

// Exemplo:
let nome = 'Maria'; // string
const idade = 30; // number
let ativo = true; // boolean
let nada = null; // null
let indefinido; // undefined

// Exercício:
// 1. Crie uma variável para cada tipo primitivo e imprima seu valor e tipo no console.

// Exercício Resolvido:
// 1. Crie uma variável para cada tipo primitivo e imprima seu valor e tipo no console.
let exemploString = 'texto'; // string
let exemploNumber = 10; // number
let exemploBoolean = false; // boolean
let exemploNull = null; // null
let exemploUndefined; // undefined
let exemploBigInt = 12345678901234567890n; // bigint
let exemploSymbol = Symbol('simbolo'); // symbol

console.log('Valor:', exemploString, '| Tipo:', typeof exemploString);
console.log('Valor:', exemploNumber, '| Tipo:', typeof exemploNumber);
console.log('Valor:', exemploBoolean, '| Tipo:', typeof exemploBoolean);
console.log('Valor:', exemploNull, '| Tipo:', typeof exemploNull); // typeof null retorna 'object' (comportamento histórico do JS)
console.log('Valor:', exemploUndefined, '| Tipo:', typeof exemploUndefined);
console.log('Valor:', exemploBigInt, '| Tipo:', typeof exemploBigInt);
console.log('Valor:', exemploSymbol, '| Tipo:', typeof exemploSymbol);
// Cada console.log mostra o valor e o tipo da variável, facilitando a visualização dos tipos primitivos em JS.
