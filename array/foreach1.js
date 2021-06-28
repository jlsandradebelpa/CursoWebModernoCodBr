/* 
Arquivo: foreach1.js
data : 27/06/2021 - 22:19
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 115. Foreach #01
*/
const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovaos = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovaos)

