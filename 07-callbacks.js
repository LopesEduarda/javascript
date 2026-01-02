// Callbacks em JavaScript
// -----------------------
// Callback é uma função passada como argumento para outra função.
function cumprimentar(nome, callback) {
    console.log('Olá, ' + nome);
    callback();
}
cumprimentar('Maria', function() {
    console.log('Callback executado!');
});

// Exercício:
// 1. Crie uma função que receba dois números e um callback para exibir o resultado da soma.
// 2. Explique com comentários o fluxo de execução do callback.

// Exercício Resolvido:
// 1. Crie uma função que receba dois números e um callback para exibir o resultado da soma.
function somaCallback(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}
somaCallback(3, 4, function(res) {
    console.log('Resultado da soma:', res);
});
// A função somaCallback recebe dois números e um callback. Após calcular a soma, chama o callback passando o resultado.
// O callback é executado após a soma, permitindo manipular o resultado de forma flexível.
