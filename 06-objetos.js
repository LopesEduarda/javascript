// Objetos em JavaScript
// ---------------------
// Objetos armazenam pares chave-valor.
let pessoa = {
    nome: 'João',
    idade: 25,
    profissao: 'Dev'
};
console.log(pessoa.nome, pessoa['idade']);

// Adicionar, remover e alterar propriedades
pessoa.sobrenome = 'Silva';
delete pessoa.profissao;
pessoa.idade = 26;

// Exercício Resolvido:
// 1. Crie um objeto representando um carro com propriedades e métodos.
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    ligar: function() { console.log('Carro ligado!'); }
};
carro.ligar();
// O objeto carro tem propriedades e um método que imprime uma mensagem.

// 2. Liste todas as chaves e valores de um objeto.
let chaves = Object.keys(carro);
let valores = Object.values(carro);
console.log('Chaves:', chaves);
console.log('Valores:', valores);
// Object.keys retorna as chaves, Object.values retorna os valores do objeto.
