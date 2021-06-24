function Carro(velocidademaxima = 200, delta = 5) {
   // atritubo privado
   let velocidadeAtual = 0
   
   // metodo publico
   this.acelerar = function () {
       if (velocidadeAtual + delta <= velocidademaxima) {
           velocidadeAtual += delta
       } else {
           velocidadeAtual = velocidademaxima
       }
   }
}

// metodo public
this.getvelocidadeAtual = function () {
    return velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new Carro(350, 70)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)