/* 
Arquivo: heranca5.js
data : 26/06/2021 - 20:50
Autor: Jorge Andrade
Secao: 6 Javascript: Objeto
Aula : 106. Herança #05
 */
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[2]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())