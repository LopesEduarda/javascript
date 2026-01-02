// ES6+ em JavaScript
// ------------------
// let, const, arrow functions, template literals, destructuring, spread/rest, classes, módulos

// let/const
let x = 10;
const y = 20;

// Arrow function
const soma = (a, b) => a + b;

// Template literals
console.log(`A soma de ${x} e ${y} é ${soma(x, y)}`);

// Destructuring
const pessoa = { nome: 'Ana', idade: 22 };
const { nome, idade } = pessoa;

// Spread/rest
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
function somaTudo(...nums) { return nums.reduce((a, b) => a + b, 0); }

// Classes
class Animal {
    constructor(nome) { this.nome = nome; }
    falar() { console.log(this.nome + ' faz barulho.'); }
}

// Exercício:
// 1. Reescreva funções usando arrow functions.
// 2. Use destructuring para extrair valores de objetos e arrays.
// 3. Crie uma classe Pessoa com método apresentar().

// Exercício Resolvido:
// 1. Reescreva funções usando arrow functions.
const quadrado = n => n * n;
console.log('Quadrado (arrow):', quadrado(5));
// Função tradicional reescrita como arrow function.

// 2. Use destructuring para extrair valores de objetos e arrays.
const pessoa2 = { nome: 'Carlos', idade: 40 };
const { nome: nome2, idade: idade2 } = pessoa2;
console.log('Nome:', nome2, 'Idade:', idade2);
const arr = [10, 20, 30];
const [primeiro, segundo] = arr;
console.log('Primeiro:', primeiro, 'Segundo:', segundo);
// Destructuring facilita a extração de valores.

// 3. Crie uma classe Pessoa com método apresentar().
class Pessoa {
    constructor(nome) { this.nome = nome; }
    apresentar() { console.log(`Olá, meu nome é ${this.nome}`); }
}
const p = new Pessoa('Julia');
p.apresentar();
// Classe com método que imprime uma apresentação personalizada.
