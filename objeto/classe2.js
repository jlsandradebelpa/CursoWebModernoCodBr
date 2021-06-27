/* 
Arquivo: classe2.js
data : 27/06/2021 - 15:39
Autor: Jorge Andrade
Secao: 6 Javascript: Objeto
Aula  : 111. Classe #02
 */
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)