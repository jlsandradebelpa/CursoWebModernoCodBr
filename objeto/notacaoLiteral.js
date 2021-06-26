/* 
Arquivo: notacaoLiteral.js
data : 25/06/2021 - 21:16
Autor: Jorge Andrade
Seção: 6 Javascript: Objeto
Aula : 99. Notação Literal
 */
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ..
    },
    function2() {
        //...
    }
}

console.log(obj5)