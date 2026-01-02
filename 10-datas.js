// Manipulação de Datas em JavaScript
// ---------------------------------
const agora = new Date();
console.log(agora);
console.log(agora.getFullYear(), agora.getMonth() + 1, agora.getDate());

// Exercício Resolvido:
// 1. Mostre a data e hora atual formatada (dd/mm/aaaa hh:mm:ss).
function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const min = String(data.getMinutes()).padStart(2, '0');
    const seg = String(data.getSeconds()).padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
console.log('Data formatada:', formatarData(new Date()));
// A função formatarData monta a string no formato desejado.

// 2. Calcule a diferença em dias entre duas datas.
function diferencaDias(data1, data2) {
    const msPorDia = 1000 * 60 * 60 * 24;
    const diff = Math.abs(data1 - data2);
    return Math.floor(diff / msPorDia);
}
const d1 = new Date('2026-01-01');
const d2 = new Date('2026-01-10');
console.log('Diferença em dias:', diferencaDias(d1, d2));
// A função calcula a diferença absoluta em milissegundos e converte para dias.
