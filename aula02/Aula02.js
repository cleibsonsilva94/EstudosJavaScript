// CONDICIONAIS E VALOR BOOLEANO

// Exemplo de condicional para verificar se um número é par.
// O símbolo % retorna o resto da divisão.
// Ao usar ===, verifica se o resto é igual a 0 (true) ou diferente de 0 (false).
// O operador === é o operador de igualdade estrita em JavaScript. Ele verifica se dois valores são iguais em tipo e valor. Dois iguais também funcionam. A diferença é que ele pode converter um texto para um valor numérico.
// ! símbolo de negação.
const numero = 12;
const eDivisivelPor = (numero % 5) === 0;

if (eDivisivelPor) {
    console.log('Sim');
}

else {
    console.log('Não');
}

// if (!eNumeroPar) {
// console.log('Ímpar')
//}
