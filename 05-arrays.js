// Arrays em JavaScript
// --------------------
// Arrays armazenam listas de valores.
let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas[0], frutas.length);

// Métodos comuns: push, pop, shift, unshift, indexOf, includes, slice, splice, forEach, map, filter, reduce
frutas.push('uva');
frutas.forEach((fruta, i) => console.log(i, fruta));

// Exercício:
// 1. Crie um array de números e calcule a soma de todos os elementos.
// 2. Remova o primeiro e o último elemento de um array.
// 3. Use map para criar um novo array com o dobro dos valores.

// Exercício Resolvido:
// 1. Crie um array de números e calcule a soma de todos os elementos.
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((acc, n) => acc + n, 0);
console.log('Soma dos elementos:', soma);
// O método reduce acumula a soma dos elementos do array.

// 2. Remova o primeiro e o último elemento de um array.
let arr = [10, 20, 30, 40];
arr.shift(); // remove o primeiro
arr.pop(); // remove o último
console.log('Array após remoções:', arr);
// shift remove o primeiro elemento, pop remove o último.

// 3. Use map para criar um novo array com o dobro dos valores.
let dobro = numeros.map(n => n * 2);
console.log('Dobro dos valores:', dobro);
// map cria um novo array aplicando a função a cada elemento.
