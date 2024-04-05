/* 
 Objetivo:
 Fazer um programa que calcule o valor de uma viagem.
 O programa terá 3 variáveis:
 1. Preço do combustível por litro.
 2. Gasto médio de combustível do carro por quilômetro.
 3. Distância percorrida pelo carro em quilômetros.
*/

//entrada de dados
const valorCombustivel = 5.79; // O Ponto substitue a virgula
const kmPorLitro = 10;
const distanciaEmKm = 100; 
//Distancia para separar a entrada de dados, acima e abaixo o calculo. 
const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * valorCombustivel;
console.log(valorGasto);