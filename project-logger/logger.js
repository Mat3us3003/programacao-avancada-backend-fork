const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')//Variável para definir o caminho de uma maneira universal para os diferentes tipos de SO

const emitter = new EventEmitter()
//função que recebe com o metodo .on a mensagem enviada pelo .emit
emitter.on('oi',(mensagem)=>{
    fs.appendFile(path.join(__dirname, 'log.txt'), mensagem, (err)=>{
        if(err) throw err//Tratamento de erro
    })
    console.log('Salvando...')
})
//função log que emite com o .emit uma mensagem
function log(mensagem){
    emitter.emit('oi', mensagem)
}

//log('Um log qualquer...')

module.exports = log //Exportando essa função para outras classes usarem
