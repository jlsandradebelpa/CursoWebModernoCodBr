// ESNEXT - Aula 188 - Promise #02
/*
setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')

        setTimeout(function() {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)
*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            console.log('Executando promises')
            resolve()
            
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
    .then(esperarPor)
