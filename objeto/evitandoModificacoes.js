/* 
Arquivo: evitandoModificacoes.js
data : 26/06/2021 - 22:38
Autor: Jorge Andrade
Secao: 6 Javascript: Objeto
Aula  : 108. Evitando Modificações
 */
// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensivel : ',Object.isExtensible(produto))

produto.nome = 'Barracha'
produto.descricao = 'Boracha escolar Branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado : '+Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes