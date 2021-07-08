/* 
Arquivo: exportar.js
data : 08/07/2021 - 19:49
Autor: Jorge Andrade
Secao: Seção 9: Node
Aula : 135. Sistema de Módulos: Exports
*/
console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)


exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true}