// HOF -> Higher Order Function
// Função de ordem superior é uma função que recebe outra função como parâmetro ou retorna uma função como resultado.

// Exemplo de função que recebe outra função como parâmetro
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

function soma(num1, num2) {
    return num1 + num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

const resultadoOperacao = executarOperacao(5, 3, soma); // Deve retornar 8
console.log('Resultado da soma:', resultadoOperacao);


function contarVogais(palavra) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let vogal of palavra) {
        if (vogais.includes(vogal)) {
            contador++;
        }
    }
    return contador;
}

console.log('Número de vogais em "JavaScript":', contarVogais('JavaScript')); // Deve retornar 3




function executaAçao(acao) {
    acao();
}

executaAçao(() => {
    console.log('Executando a ação...');
});