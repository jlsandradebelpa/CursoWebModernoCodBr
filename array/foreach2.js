/* 
Arquivo: foreach2.js
data : 27/06/2021 - 22:19
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 116. Foreach #02
*/
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha','Alo','Daniel','Raquel']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
  })