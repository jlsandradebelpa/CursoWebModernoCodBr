function tratarErroELancar() { 
    // throw new Eror[',,,']
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: error.nome,
        msg: error.message,
        date: new Date
    }
 }

function imprimirNomeGritado(obj) {
    try {
        console.log(obg.nome.toUpperCase() + '!!!')
    } catch (e) {
      tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)