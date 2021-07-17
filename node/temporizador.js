const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 5', function () {
    console.log('Executando Tarefa 1:', new Date().getSeconds())
})
/*
0-domingo
1-seg
2-ter
3-qua
4-qui
5-sex
6-sab
*/

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando a Tarefa 1!')
}, 2000)
    
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 23
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!',new Date().getSeconds())
})