let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log("!!0->"+!!0)
console.log("!!=>"+!!'')
console.log("!!null->"+!!null)
console.log("!!Nan->"+!!NaN)
console.log("!!undefined->"+!!undefined)
console.log("!!(isAtivo = false)->"+!!(isAtivo = false))

console.log('pra finalizar...')
console.log("complexa com ou ||->"+!!(''|| null || 0 || '123'))

let nome = 'Lucas'

console.log("Operação lógica em cima de uma string ou ||->"+nome || 'Desconhecido')


