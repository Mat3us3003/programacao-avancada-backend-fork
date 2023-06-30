//Nessa linha é criado uma variavel com os dados do sistema operacional
const os = require('os')
//É criado uma variável recebendo os dados do arquivo logger
const log = require('./logger')
//É uma função anônima chama a função log do arquivo logger e mostra na tela a quatidade de memoria livre e usada no computador
setInterval(()=>{
    const total = parseInt(totalmem()/1024/1024)//Variável com o total de memória no computador
    const freeMem = parseInt(freemem()/1024/1024)//Variável com o total de memória livre
    const used = freeMem*100/total//Variável com o total de memória utilizado
    console.clear()
    //console.log(`Memória Livre: ${parseInt(used)} % \nMemória Usada: ${parseInt(100-used)} %\n=-=-=-=-=-=-=-=`)
    //Objeto com os dados a serem mostrados
    const stat = {
        total: `${total} MB`,
        freeMem: `${freeMem}`,
        used: `${used} %`
    }

    console.log('     +++++ MEMORY STATUS +++++')
    console.table(stat)
log(`${JSON.stringify(stat)}\n`)//Chamada da função de logger e transformando o objeto stat em JSON
}, 1000)

const{ freemem, totalmem } = os

    



    



    /*16128 - 100
    8201 - x*/