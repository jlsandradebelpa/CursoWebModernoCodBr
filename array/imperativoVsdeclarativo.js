/* 
Arquivo: imperativoVsdeclarativo.js
data : 28/06/2021 - 18:37
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 126. Imperativo Vs Declarativo
*/
const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true}
]
// Imperativo - Como tem que ser feito? menos reuso
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Declarativa - O que tem que ser feito? recomendado
// Promove o reuso com funções pequenas e especialistas
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);