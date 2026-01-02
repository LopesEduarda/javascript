// Operadores em JavaScript
// -----------------------
// Operadores aritméticos: +, -, *, /, %, **
// Operadores de comparação: ==, ===, !=, !==, >, <, >=, <=
// Operadores lógicos: &&, ||, !
// Operadores de atribuição: =, +=, -=, *=, /=, etc.

// Exemplos:
let a = 10, b = 5;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);
console.log(a == '10', a === '10', a != b, a !== b);
console.log(a > b, a < b, a >= b, a <= b);
console.log(a > 0 && b > 0, a > 0 || b < 0, !(a < 0));

// Exercício Resolvido:
// 1. Teste todos os operadores acima com diferentes valores e imprima os resultados.
let x = 7, y = 3;
console.log('Aritméticos:', x + y, x - y, x * y, x / y, x % y, x ** y);
console.log('Comparação ==:', x == '7'); // true, compara valor
console.log('Comparação ===:', x === '7'); // false, compara valor e tipo
console.log('Comparação !=:', x != y); // true
console.log('Comparação !==:', x !== '7'); // true
console.log('Maior/Menor:', x > y, x < y, x >= y, x <= y);
console.log('Lógicos:', x > 0 && y > 0, x > 0 || y < 0, !(x < 0));
x += 2; // x = 9
console.log('Atribuição +=:', x);
x *= 2; // x = 18
console.log('Atribuição *=:', x);
// Cada linha mostra o resultado e o motivo do resultado, facilitando o entendimento dos operadores.
