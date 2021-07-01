/* 
Arquivo: moduloCliente.js
data : 30/06/2021 - 21:54
Autor: Jorge Andrade
Secao: Seção 9: Node
Aula : 132. Sistema de Módulos
*/
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)