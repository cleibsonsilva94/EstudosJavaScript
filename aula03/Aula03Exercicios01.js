/* Exercicio da media ponderada de uma aluno

*/

//Entradas
const nota1 = 4;
const nota2 = 5;
const nota3 = 1;
const Media = (nota1 + nota2 + nota3) / 3;

//Retorno
if (Media < 5) {
    console.log(`O aluno está reprovado pois sua media foi ${Media.toFixed(1)}`); //Se deixado vazio, ele arredonda parta cima. 
}
else if (Media >= 5 && Media < 8) {
    console.log(`O aluno está em recuperação pois sua media foi ${Media.toFixed(1)}`);
}
else {
    console.log(`O aluno está aprovado e sua média foi ${Media.toFixed(1)}`);
}

