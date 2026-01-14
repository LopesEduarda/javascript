/*
🧠 Exercício 1 — “Compactador de texto”

Você recebe uma string contendo letras e números.

📌 Regra:

Cada número indica quantas vezes a letra anterior deve se repetir

Se não tiver número depois da letra → ela aparece 1 vez

A string sempre vai ser válida.

✅ Exemplos:

Exemplo 1

Entrada:
"a3b2c"

Saída:
"aaabbc"

Explicação:

a3 → "aaa"

b2 → "bb"

c → "c" (sem número, então 1 vez)
*/

function compactarTexto(texto) {
    let resultado = '';

   // eu vou percorrer cada caractere da string, e verificar se é uma letra ou um número.
   // Se for uma letra, eu verifico se o próximo caractere é um número.
    // Se for um número, eu repito a letra o número de vezes indicado.

    for (let i = 0; i < texto.length; i++) {
        const caractere = texto[i];

        if (isNaN(caractere)) { // Se for uma letra
            let letra = caractere;
            let repeticoes = 1; // padrão é 1 vez


            // Verifica se o próximo caractere é um número
            if (i + 1 < texto.length && !isNaN(texto[i + 1])) {
                repeticoes = parseInt(texto[i + 1]);
                i++; // pula o número na próxima iteração
            }
            resultado += letra.repeat(repeticoes);
            // Adiciona a letra repetida ao resultado
            // repeat() repete a string o número de vezes indicado
        }
    }
    return resultado;
}

// Testando a função
console.log(compactarTexto("a3b2c")); // "aaabbc"




// Exercício 2 - "Remover pares"

function removePares(string) {
    let letraSemPares = [];

    for (let index = 0; index < string.length; index++) {
        // aqui eu preciso percorrer cada caracter da string
        // e verificar se o caracter atual é igual ao último caracter adicionado na lista letraSemPares
        // se for igual, eu removo o último caracter da lista (pop)
        // se não for igual, eu adiciono o caracter atual na lista (push)
        if (string[index] === letraSemPares[letraSemPares.length - 1]) {
            letraSemPares.pop();
        } else {
            letraSemPares.push(string[index]);
        }
    }
    return letraSemPares.join('');
}

// Testando a função
console.log(removePares("abbaca")); // "ca"

/*
O array letraSemPares não guarda toda a string original, mas sim o resultado parcial do processamento, removendo pares conforme encontra.

Funciona assim:

Você percorre a string original caractere por caractere.
Para cada caractere, você compara com o último elemento do array letraSemPares.
Se for igual, remove o último (ou seja, elimina o par).
Se não for igual, adiciona o caractere ao array.
No final, letraSemPares contém apenas os caracteres que não formaram pares consecutivos e, portanto, “sobraram” após todas as remoções.


*/


const caracter = 'abcde';
const removerLast = caracter.length - 1;
// aqui só vai retornar a quantidade de caracteres do array
console.log(removerLast);

const removerLastWithSlice = caracter.slice(0, -1);
// aqui vai retornar a string sem o último caracter
console.log(removerLastWithSlice);