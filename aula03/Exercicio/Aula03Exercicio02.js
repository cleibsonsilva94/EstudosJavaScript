// CÁLCULO DO IMC

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

// Recebimento de dados
const altura = 1.76;
const peso = 69;
// Cálculo
const IMC = peso / Math.pow(altura, 2); // A função Math.pow() eleva o primeiro argumento (altura) à potência do segundo argumento (2)
if (IMC < 18.5) {
  console.log(`Você está abaixo do peso, seu IMC é ${IMC.toFixed(1)}`);
}
else if (IMC >= 18.5 && IMC < 25) {
    console.log(`Você está com o peso ideal, seu IMC é ${IMC.toFixed(1)}`);
}
else if (IMC >= 25 && IMC < 30) {
    console.log(`Você está acima do peso, seu IMC é ${IMC.toFixed(1)}`);
}
else if (IMC >= 30 && IMC < 40) {
  console.log(`Você está obeso, seu IMC é ${IMC.toFixed(1)}`);
}
else {
  console.log(`Seu nível de obesidade está grave, seu IMC é ${IMC.toFixed(1)}`)  
}
// Fim do código.
