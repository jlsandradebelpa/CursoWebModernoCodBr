function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Prod1',2.0))
console.log(criarProduto('Prod2',1.6))
console.log(criarProduto('Notebook',1800))