// Promises e Async/Await em JavaScript
// ------------------------------------
// Promises representam operações assíncronas.
const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso!'), 1000);
});
promessa.then(resultado => console.log(resultado));

// Async/Await simplifica o uso de Promises
async function executar() {
    const resultado = await promessa;
    console.log('Com await:', resultado);
}
executar();

// Exercício:
// 1. Crie uma Promise que rejeite após 2 segundos.
// 2. Use async/await para tratar o erro com try/catch.

// Exercício Resolvido:
// 1. Crie uma Promise que rejeite após 2 segundos.
const promessaErro = new Promise((resolve, reject) => {
    setTimeout(() => reject('Erro após 2 segundos!'), 2000);
});

// 2. Use async/await para tratar o erro com try/catch.
async function testarPromise() {
    try {
        const res = await promessaErro;
        console.log(res);
    } catch (erro) {
        console.log('Erro capturado com try/catch:', erro);
    }
}
testarPromise();
// A função testarPromise usa await para esperar a Promise e try/catch para capturar o erro.
