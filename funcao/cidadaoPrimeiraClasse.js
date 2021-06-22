// Fun��o em JS First-Class Object (Citizens)
// Hihger-order function

// Criar de forma literal
function fun1() {
    console.log(fun1)
 }
fun1()

// Armazenar de forma literal
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar fun��o como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// uma fun��o pode retrnar/conter uma fun��o
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }    
}

soma(2, 3) (4)
const cincoMais = soma(2, 3)
cincoMais(4)