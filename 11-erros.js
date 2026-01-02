// Manipulação de Erros em JavaScript
// ---------------------------------
try {
    throw new Error('Algo deu errado!');
} catch (erro) {
    console.log('Erro capturado:', erro.message);
} finally {
    console.log('Sempre executa!');
}

// Exercício:
// 1. Crie uma função que lança um erro se o parâmetro for negativo.
// 2. Trate o erro usando try/catch.

// Exercício Resolvido:
// 1. Crie uma função que lança um erro se o parâmetro for negativo.
function verificaPositivo(n) {
    if (n < 0) throw new Error('Valor negativo!');
    return 'Valor positivo';
}
// 2. Trate o erro usando try/catch.
try {
    console.log(verificaPositivo(-5));
} catch (e) {
    console.log('Erro tratado:', e.message);
}
// A função verificaPositivo lança um erro se o valor for negativo. O try/catch captura e trata o erro.
