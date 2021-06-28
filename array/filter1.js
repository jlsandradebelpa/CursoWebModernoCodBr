/* 
Arquivo: filter1.js
data : 28/06/2021 - 17:48
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 120. Filter #01
*/
const produtos = [
    { nome: 'NoteBook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Video', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
