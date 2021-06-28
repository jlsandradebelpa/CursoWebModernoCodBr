/* 
Arquivo: arrayMetodos.js
data : 27/06/2021 - 15:46
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 113. Array: Metodos Importantes 
*/
const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // massa quebou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()  // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas','Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
