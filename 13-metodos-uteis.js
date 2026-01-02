// Métodos úteis de Arrays e Objetos
// ---------------------------------
// Arrays: map, filter, reduce, find, some, every, sort
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.map(n => n * 2));
console.log(numeros.filter(n => n % 2 === 0));
console.log(numeros.reduce((acc, n) => acc + n, 0));
console.log(numeros.find(n => n > 3));
console.log(numeros.some(n => n > 4));
console.log(numeros.every(n => n > 0));
console.log(numeros.sort((a, b) => b - a));

// Objetos: Object.keys, Object.values, Object.entries
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj), Object.values(obj), Object.entries(obj));

// Exercício Resolvido:
// 1. Use reduce para multiplicar todos os valores de um array.
const nums = [2, 3, 4];
const produto = nums.reduce((acc, n) => acc * n, 1);
console.log('Produto dos valores:', produto);
// reduce multiplica todos os elementos do array.

// 2. Liste todas as chaves e valores de um objeto.
const objeto = { x: 1, y: 2 };
Object.entries(objeto).forEach(([chave, valor]) => {
    console.log(`Chave: ${chave} | Valor: ${valor}`);
});
// Object.entries retorna pares chave-valor para iteração.
