// 1a. forma - usando a notação literal
/* 
Arquivo: criandoObjetos.js
data: 25/06/2021 - 20:53
Autor: Jorge Andrade
Seção: 6 Javascript: Objeto
Aula: 97 -  Estrategias de criação de Object
 */
const obj1 = {}
console.log('1a forma literal (const obj1 = {}): '+obj1)

// 2a. forma - funções construtoras - Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// 3a. forma - Funções construtoras próprias
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('NoteBook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// 4a. forma - Função Factory
function CriarFuncionario(nome, salarioBase, flatas) { 
    return {
        nome,
        salarioBase,
        flatas,
        getSalario() {
            return (salarioBase / 30) * (30 - flatas)
        }
    }
 }

 const f1 = CriarFuncionario('Joao', 7980, 4)
 const f2 = CriarFuncionario('Maria', 11400, 1)
 console.log(f1.getSalario(), f2.getSalario())

// 5a. forma - Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// 6a. forma - uma função famosa que retorna Object...JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)