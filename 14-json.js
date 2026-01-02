    // JSON em JavaScript
// ------------------
// JSON (JavaScript Object Notation) é um formato leve de troca de dados.
const obj = { nome: 'Lucas', idade: 28 };
const json = JSON.stringify(obj);
console.log(json);
const obj2 = JSON.parse(json);
console.log(obj2);

// Exercício:
// 1. Converta um array de objetos em JSON e depois de volta para objeto.
// 2. Explique a diferença entre JSON e objeto JavaScript.

// Exercício Resolvido:
// 1. Converta um array de objetos em JSON e depois de volta para objeto.
const pessoas = [
    { nome: 'Ana', idade: 20 },
    { nome: 'Bruno', idade: 25 }
];
const pessoasJSON = JSON.stringify(pessoas);
console.log('Array em JSON:', pessoasJSON);
const pessoasObj = JSON.parse(pessoasJSON);
console.log('JSON para objeto:', pessoasObj);
// JSON.stringify converte para string JSON, JSON.parse reconverte para objeto.

// 2. Explique a diferença entre JSON e objeto JavaScript.
// JSON é uma string em formato específico para troca de dados.
// Objeto JavaScript é uma estrutura de dados manipulável diretamente no código.
