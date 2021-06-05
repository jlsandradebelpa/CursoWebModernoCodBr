const peso1 = 1.0
const peso2 = Number('2.0')

console.log('const peso1 é = '+peso1+', const peso2 é = ',peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
console.log('const total é = '+total)
const media = total / (peso1 + peso2)
console.log('const media é =  '+media)
console.log('const media com 2 casas decimais é = '+media.toFixed(2))
console.log('converr a const media em bináio = '+media.toString(2))
console.log(typeof media)
console.log(typeof Number)