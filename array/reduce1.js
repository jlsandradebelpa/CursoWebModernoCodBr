/* 
Arquivo: reduce1.js
data : 28/06/2021 - 18:37
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 122. Reduce #01
*/
const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)