/* 
Arquivo: notacaoLiteral.js
data : 25/06/2021 - 21:54
Autor: Jorge Andrade
Seção: 6 Javascript: Objeto
Aula : 100. Getters/Setters
 */
const sequencia = {
    _valor: 1, // _ convenção de certos programadores
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)