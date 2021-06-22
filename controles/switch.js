const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
            console.log('Quadro de Honra')
            break
        case  9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovador')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        case -1:
            console.log('Quadro de Desonra')
            break
        default:
            console.log('Nota invalida')
    }
    console.log('Fim')
}

//imprimirResultado(10)
//imprimirResultado(8.9)
//imprimirResultado(6.55)
//imprimirResultado(2.3)
imprimirResultado(-1)
//imprimirResultado(11)