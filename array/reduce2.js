/* 
Arquivo: reduce2.js
data : 28/06/2021 - 18:37
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 124. Reduce #02
*/
const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas ?
const todosBolsistas = ( resultado, bolsista ) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno e bolsista ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce(algumBolsista))