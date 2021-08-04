// ESNEXT - Aula 191 - Desafio Promise #03- resposta
const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo=> conteudo.split('\n'))
    .then(linhas => console.log(linhas.length))
