let valor // não incializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.tostring())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undenif   //evite atribuir undenied
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)