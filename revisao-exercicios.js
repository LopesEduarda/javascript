// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 5;
const num2 = 12;

const operacao = 'soma'; // pode ser 'soma' ou 'multiplicacao'

let resultado;

if (operacao === 'soma') {
    resultado = num1 + num2;
    console.log(`O resultado da soma é: ${resultado}`);
} else if (operacao === 'multiplicacao') {
    resultado = num1 * num2;
    console.log(`O resultado da multiplicação é: ${resultado}`);
}


// localizar o nivel de bônus de acordo com a faixa salarial
// ex: $11000 e acima: 3% de bônus
// $10999 a $7000: 5% de bônus
// $ 6999 a $4008: 7% de bônus
// $3999 p baixo: 9% de bônus

const salario = 11000;

let bonus;

if (salario >= 11000) {
    bonus = salario * 0.03;
} else if (salario >= 7000 && salario < 11000) {
    bonus = salario * 0.05;
} else if (salario >= 4008 && salario < 7000) {
    bonus = salario * 0.07;
} else {
    bonus = salario * 0.09;
}

console.log(`O bônus salarial é: $${bonus.toFixed(2)}`);