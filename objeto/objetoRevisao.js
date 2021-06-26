/* 
Arquivo: objetoRevisao.js
data: 25/06/2021 - 20:53
Autor: Jorge Andrade
Seção: 6 Javascript: Objeto
Aula: 96 - Revisão sobre Objeto
 */
// coleção dinÃ£mica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.nome
console.log(produto)

delete produto['marca do produto']
console.log(produto)

delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'JÃºnior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calculaValorSeguro: function() {
        // ..
    }
}

console.log(carro)
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
console.log(carro)
delete carro.proprietario.endereco
console.log(carro)
delete carro.calculaValorSeguro
console.log(carro)
//console.log(carro.condutores.length)
