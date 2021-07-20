const { totalmem } = require("os")

// Arrow Function
const soma = (a, b) => a + b
console.log(soma(10, 4))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro defualt valor padrao
function log(texto = 'Node') { 
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}
console.log(total(12, 33, 45, 51))