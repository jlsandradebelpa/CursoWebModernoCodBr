// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const _ofuncionario = { nome: 'Maria', salario: 12348.99 }
const _oclone = { ativo: true, ..._ofuncionario }
console.log(_oclone)

// usar spread com array
const _ogrupoA = ['João', 'Pedro', 'Gloria']
const _ogrupoFinal = ['Maria', ..._ogrupoA, 'Rafaela']
console.log(_ogrupoFinal)