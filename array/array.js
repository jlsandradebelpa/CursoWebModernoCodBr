/* 
Arquivo: array.js
data : 27/06/2021 - 15:46
Autor: Jorge Andrade
Secao: 7 Javascript: Array
Aula : 112. Array: Visão Geral
*/
console.log(typeof Array, typeof new Array)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0],aprovados[1],aprovados[2],aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,0, 'Elemento1','Elemento2')
console.log(aprovados)