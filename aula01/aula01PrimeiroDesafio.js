/* 
Objetivo:
Fazer um programa que calcule o valor de uma viagem.
O programa terá 3 variáveis:
1. Preço do combustível por litro.
2. Gasto médio de combustível do carro por quilômetro.
3. Distância percorrida pelo carro em quilômetros.
*/

// Entrada de dados
const valorCombustivel = 5.48; // O ponto substitui a vírgula
const kmPorLitro = 11;
const distanciaEmKm = 12; 
// Distancia para separar a entrada de dados, acima e abaixo o cálculo.
const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * valorCombustivel;
console.log(valorGasto.toFixed(2)); // toFixed arredonda para duas casas decimais.
