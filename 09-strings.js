// Manipulação de Strings em JavaScript
// -----------------------------------
let texto = 'JavaScript é incrível!';
console.log(texto.length, texto.toUpperCase(), texto.toLowerCase(), texto.split(' '));
console.log(texto.replace('incrível', 'poderoso'));

// Exercício Resolvido:
// 1. Peça ao usuário para digitar uma frase e mostre quantas palavras ela tem.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Digite uma frase: ', (frase) => {
    const palavras = frase.trim().split(/\s+/);
    console.log('Quantidade de palavras:', palavras.length);
    // split(/\s+/) separa por qualquer espaço em branco
    // trim remove espaços extras no início/fim
    // O resultado é a contagem de palavras digitadas
    rl.question('Digite uma string para inverter: ', (texto) => {
        const invertida = texto.split('').reverse().join('');
        console.log('String invertida:', invertida);
        // split('') transforma em array de caracteres, reverse inverte, join junta de volta
        rl.close();
    });
});
