/* 
Arquivo: heranca1.js
data : 25/06/2021 - 22:30
Autor: Jorge Andrade
Seção: 6 Javascript: Objeto
Aula : 102. Herança #01
 */
const ferrari = {
    modelo: 'F40',
    velmax: 324
}

const volvo = {
    modelo: 'V40',
    velmax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)