const valores = [7.7, 8.9, 8.3, 9.2]
console.log('Array Valores-> '+valores[0],valores[3])
console.log('Array Valoes[4]-> '+valores[4])

valores[4] = 10
console.log('Array valores-> '+valores)
console.log('Array Valores Length-> '+valores.length)

valores.push({id : 3}, false, null, 'teste')
console.log('valores.push-> '+valores)

console.log('valores.pop() -> '+valores.pop());
delete valores[0]
console.log(valores)

console.log(typeof valores)