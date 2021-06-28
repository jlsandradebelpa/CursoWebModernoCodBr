/* 
Arquivo: map3.js
data : 28/06/2021 - 17:11
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 119. Map #03
*/
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno","preco": 13.90 }',
    '{ "nome": "Kit de Kapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenaPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenaPreco)
console.log(resultado)

