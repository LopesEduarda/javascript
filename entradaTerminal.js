const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Qual o seu nome? ', (nome) => {
    console.log(`Olá, ${nome}! Bem-vindo ao programa.`);
    leitor.close();
});