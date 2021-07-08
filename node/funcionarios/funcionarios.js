/* 
Arquivo: funcionarios.js
data : 08/07/2021 - 20:10
Autor: Jorge Andrade
Secao: Seção 9: Node
Aula : 136. Arquivo package.json
*/
const axios = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(Response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com o menor salario?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})