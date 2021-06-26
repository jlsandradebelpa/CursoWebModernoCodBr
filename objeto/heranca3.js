/* 
Arquivo: heranca3.js
data : 26/06/2021 - 20:00
Autor: Jorge Andrade
Secao: 6 Javascript: Objeto
Aula : 104. Herança #03
 */
const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log('Nome: '+filha1.nome+'  corCabelo:'+filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`o nome da filha 2 e: ${filha2.nome} a cor do cabelo e: ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}