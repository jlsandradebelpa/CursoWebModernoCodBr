let a = 3

global.b = 123
this.c = 456
this.d = false
this.c = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca
abc = 3 // n�o fa�a isso em casa
console.log(global.abc)