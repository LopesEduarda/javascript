// Estruturas de Controle em JavaScript
// ------------------------------------
// if, else, else if
// switch
// while, do...while, for

// Exemplo:
let idade = 18;
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

// switch
let cor = 'azul';
switch (cor) {
    case 'vermelho':
        console.log('Cor vermelha');
        break;
    case 'azul':
        console.log('Cor azul');
        break;
    default:
        console.log('Outra cor');
}

// for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Exercício Resolvido:
// 1. Crie um programa que leia um número e diga se ele é par ou ímpar.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Digite um número: ', (num) => {
    if (Number(num) % 2 === 0) {
        console.log('É par');
    } else {
        console.log('É ímpar');
    }
    rl.close();
});
// O readline permite entrada do usuário no terminal. O resto do código verifica se o número é par ou ímpar.

// 2. Implemente um contador de 1 a 10 usando while e for.
let contador = 1;
while (contador <= 10) {
    console.log('While:', contador);
    contador++;
}
for (let i = 1; i <= 10; i++) {
    console.log('For:', i);
}
// O while repete enquanto a condição for verdadeira. O for é mais compacto para contadores.
