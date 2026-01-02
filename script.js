console.log('Olá, mundo!');
// // escrevendo uma função que retorna a soma de dois números
// function soma(a, b) {
//     if (a === 2) {
//         return 'Número dois não é permitido';
//     }
//     return a + b;
// }

// console.log(soma(3, 4)); // Deve retornar 7
// console.log(soma(2, 5)); // Deve retornar 'Número dois não é permitido'


// saldo bancário
let saldo = 0;

let deposito = 200;
let saque = 50;

const resultadoFinal = deposito - saque; // saldo agora é 150

console.log('Saldo após depósito de 200 e saque de 50:', resultadoFinal);


// contador de cliques
let cliques = 0;

for (let i = 0; i < 3; i++) {
    cliques += 1;
}
console.log('Número de cliques após 3 interações:', cliques); // Deve retornar 3


// calculadora de troco

let valorCompra = 120;
let valorPago = 200;

if (valorPago < valorCompra) {
    console.log('Pagamento insuficiente');
} else {
    let troco = valorPago - valorCompra;
    console.log('Troco a ser devolvido:', troco); // Deve retornar 80
}




// for (let numero = 0; numero <= 10; numero++) {
//     console.log('Número: ', numero);
// }


let soma = 0;

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}

console.log('Soma dos números pares de 0 a 50:', soma); // Deve retornar 650




const numeros = [3, 7, 2, 9, 5, 1];
let maiorNumero = numeros[0];
// Encontrar o maior número no array, para isso utilizamos um loop que percorre todos os elementos do array
// e compara cada elemento com o maior número encontrado até o momento.
// Se o elemento atual for maior que o maior número encontrado, atualizamos o maior número.
// No final do loop, o maior número encontrado será armazenado na variável maiorNumero.

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log('Maior número:', maiorNumero); // Deve retornar 9


// Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.
const anoNascimento = 1999;
const anoAtual = 2025;

// for (let ano = anoNascimento; ano <= anoAtual; ano++) {
//     const idade = ano - anoNascimento;
//     console.log(`Em ${ano}, a pessoa tem ${idade} anos.`);
// }

// for (let index = 0; index <= anoAtual; index++) {
//     const idade = index - anoNascimento;
//     if (idade >= 0) {
//         console.log(`Em ${index}, a pessoa tem ${idade} anos.`);
//     }
// }



// let contador = 0;

// const id = setInterval(() => {
//     contador++;
//     console.log('Contador:', contador);

//     if (contador == 5) {
//         clearInterval(id);
//         console.log('Contador parado.');
//     }
// }, 1000);


function contadorConsoantes(palavra) {
    const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let contadorConsoantes = 0;

    // Percorre cada letra da palavra, verifica se é consoante e incrementa o contador
    for (let index = 0; index < palavra.length; index++) {
        const letra = palavra[index];
        if (consoantes.includes(letra)) {
            contadorConsoantes++;
        }
    }
    return contadorConsoantes;
}

console.log(contadorConsoantes('JavaScript')); // Deve retornar 8
