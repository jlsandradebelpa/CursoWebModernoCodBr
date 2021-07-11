/* 
Arquivo: acessarModulos.js
data : 08/07/2021 - 19:06
Autor: Jorge Andrade
Secao: Seção 9: Node
Aula : 134. Sistema de Módulos: Require
*/
const ModuloA = require('../../moduloA')
console.log(ModuloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c= require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)