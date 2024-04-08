/* Programa para caucular o valor de uma viagem

Variaveis 

01 - Preço do etanol
02 - Preço da gasolina
03 - Tipo de combusticvel que esta em seu carro
04 - Gasto  medio de combustivel do carro por km
05 - Distancia de km em viagem

Imprimir o valor do custo da viagem

*/

// ENTRADA DE DADOS

const valorEtanol = 4.27;
const valorGasolina = 5.48; // O ponto substitui a vírgula
const kmPorLitro = 11;
const distanciaEmKm = 12;
const etanol = 1;
const gasolina = 2;

// CAUCULO

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (etanol) {
    const valorGasto = litrosConsumidos * valorEtanol;
}

else {
    const valorGasto = litrosConsumidos * valorGasolina;
}

console.log(valorGasto.toFixed(2)); // toFixed arredonda para duas casas decimais. Tecnicamente ele transforma o valor numerico em string. 