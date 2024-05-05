// CÁLCULO DO IMC

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
