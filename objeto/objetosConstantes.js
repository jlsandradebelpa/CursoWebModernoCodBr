/* 
Arquivo: objetosConstantes.js
data : 25/06/2021 - 21:04
Autor: Jorge Andrade
Se��o: 6 Javascript: Objeto
Aula : 98. Objetos Constantes
 */
// pessoa -> 123 -> {...} Endere�o de memoria ficticio
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <-456 ->{...}
//pessoa = { nome: 'Ana'}
Object.freeze(pessoa) // congelar o Objeto pessoa n�o consegue mais mexer nele

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)