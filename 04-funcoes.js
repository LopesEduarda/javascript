// Funções em JavaScript
// ---------------------
// Declaração tradicional
function soma(a, b) {
    return a + b;
}
// Função anônima
const subtrai = function(a, b) {
    return a - b;
};
// Arrow function
const multiplica = (a, b) => a * b;

console.log(soma(2, 3), subtrai(5, 2), multiplica(3, 4));

// Exercício Resolvido:
// 1. Crie funções para dividir dois números e para calcular o quadrado de um número.
function dividir(a, b) {
    if (b === 0) return 'Divisão por zero!';
    return a / b;
}
function quadrado(n) {
    return n * n;
}
console.log('Divisão:', dividir(10, 2)); // 5
console.log('Quadrado:', quadrado(4)); // 16
// A função dividir verifica se o divisor é zero. A função quadrado multiplica o número por ele mesmo.

// 2. Escreva uma função que receba um nome e retorne uma saudação personalizada.
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao('Lucas'));
// A função retorna uma string personalizada usando template literals.
