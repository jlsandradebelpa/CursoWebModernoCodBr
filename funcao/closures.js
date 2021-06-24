// Closure é o escopo criado quando uma função e declarada
// esse esocpo permite a função acessar e manipular variaveis a função

// Contexto léxico em ação:

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())