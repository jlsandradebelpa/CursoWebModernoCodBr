const ModuloA = require('../../moduloA')
console.log(ModuloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.log)

const c= require('./pastaC/index')
console.log(c.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)