/* 
Arquivo: arrayMetodos.js
data : 27/06/2021 - 15:46
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 114. Simulando Array com Objeto
*/
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)