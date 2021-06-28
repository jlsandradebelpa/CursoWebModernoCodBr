/* 
Arquivo: map1.js
data : 27/06/2021 - 22:42
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 117. Map #01
*/
const nums = [1, 2, 3, 4, 5]

// for com próposito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)