const { connected } = require("process")

// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamego')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamego')
console.log(times.has('Flamego'))

const nomes = ['Ana', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)