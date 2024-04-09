/* Programa para calcular o valor de uma viagem

Variáveis 

01 - Preço do etanol
02 - Preço da gasolina
03 - Tipo de combustível que você deseja usar
04 - Gasto médio de combustível do carro por km
05 - Distância de km em viagem

Imprimir o valor do custo da viagem

*/

// Entrada de dados
const valorGasolina = 5.48;
const valorEtanol = 4.78;
const kmPorLitro = 11;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';
const litrosConsumidos = distanciaEmKm / kmPorLitro;
// Manipulação 
if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * valorEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * valorGasolina;
    console.log(valorGasto.toFixed(2));
}


/* CONCEITOS IMPORTANTES

 Em JavaScript tenho 3 formas de usar uma string. 
 1 aspas simples (Mais usado e recomendado) 
 aspas duplas (Usado muito em HTML) e 3. Crase.

 Alt para cima você sobe uma linha ou um bloco de código

 Importante tentar verificar duplicidades no código e eliminar o 
 máximo possível.

 Alt Shift + F ele formata o código

 Variável ValorGasto não é global, portanto só posso usá-la dentro de onde ela estiver declarada. 

*/