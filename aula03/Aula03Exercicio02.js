// CALCULO DO IMC

//Recibimento de dados
const altura = 1.76;
const peso = 85;
//calculo
const IMC = peso / (altura * altura);
//Manipulação baseada em condicionais
if (IMC < 18.5) {
  console.log(`Voce esta abaixo do peso, seu IMC é ${IMC.toFixed(1)}`);
}
else if (IMC >= 18.5 && IMC < 25) {
    console.log(`Voce esta com o peso ideal, seu IMC é ${IMC.toFixed(1)}`);
}
else if (IMC >= 25 && IMC < 30) {
    console.log(`Voce esta acima do peso, seu IMC é ${IMC.toFixed(1)}`);
}
