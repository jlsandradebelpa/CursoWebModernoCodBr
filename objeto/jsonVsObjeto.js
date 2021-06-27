/* 
Arquivo: evitandoModificacoes.js
data : 26/06/2021 - 22:45
Autor: Jorge Andrade
Secao: 6 Javascript: Objeto
Aula  : 109. JSON vs Objeto
 */
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a:1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c' : 3 }"))
console.log('{ "a": 1, "b": 2, "c": 3}')
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))