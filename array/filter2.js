/* 
Arquivo: filter2.js
data : 28/06/2021 - 17:48
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 120. Filter #02
*/
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    } 
    return newArray 
}

const produtos = [
    { nome: 'NoteBook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Video', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 2000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
