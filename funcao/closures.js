// Closure � o escopo criado quando uma fun��o e declarada
// esse esocpo permite a fun��o acessar e manipular variaveis a fun��o

// Contexto l�xico em a��o:

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