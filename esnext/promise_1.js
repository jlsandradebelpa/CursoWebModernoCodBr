// ESNEXT - Aula 187 - Promise #01
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana','Bia','Carlos','Daniel'])
})

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))


/*
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana','Bia','Carlos','Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
*/