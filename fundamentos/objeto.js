const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.00
prod1.marca = 'Xiomi'
prod1.ano = '2021'
prod1.IMEI1 = '0101010101010101'
prod1['Desconto Legal'] = 0.40

console.log(prod1)
console.log('Object Prod1.nome -> '+prod1.nome)
console.log('Object Prod1.preco -> '+prod1.preco)
console.log('Object Prod1.marca -> '+prod1.marca)
console.log('Object Prod1.ano -> '+prod1.ano)
console.log('Object Prod1.IMEI1 -> '+prod1.IMEI1)
console.log('Object Prod1.Desconto Leal -> '+prod1["Desconto Legal"])

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)