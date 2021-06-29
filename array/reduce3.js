/* 
Arquivo: reduce3.js
data : 28/06/2021 - 18:37
Autor: Jorge Andrade
Secao: 7 Javascript: Array 
Aula : 125. Reduce #03
*/

Array.prototype.reduce2 = function(reduceCallBack, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador = valorInicial || this[0];
    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = reduceCallBack(acumulador, this[i], i, this);
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))