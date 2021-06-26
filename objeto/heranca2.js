/* 
Arquivo: heranca2.js
data : 26/06/2021 - 17:40
Autor: Jorge Andrade
Se��o: 6 Javascript: Objeto
Aula : 103. Heran�a #02
 */

// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' // n�o fa�a isso em casa use Object.setPrototypeOf
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log( filho.attr0, filho.attr1, filho.attr2, filho.attr3 )

const carro = {
    velAtual: 0,
    velMax: 200, 
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing 
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())