/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
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

