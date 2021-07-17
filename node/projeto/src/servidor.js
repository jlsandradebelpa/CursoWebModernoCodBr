const port = 3003

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
});

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // converter esse object em JSON
});

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // converter esse object em JSON
});

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
});
