/*
setTimeout(myFunction, 5000)
setInterval(myFunction, 5000)
setTimeout(myFunction, 5000)

function myFunction() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    
    console.log(`${h}:${m}:${s}`)
}*/
/*
const fs = require('fs')
console.log('Primeira saida')
fs.readFile('./text.txt', callback)
function callback(err, conteudo){
    if(err) return console.error(err)
    console.log(String(conteudo))
    
}
console.log('Segunda saida')
console.log('Terceira saida')
Esse código mostra como ler um arquivo de texto é lento*/

/* Modo sincrono
function soma(callback, callbackError){
    const resultado = 1+1
    if (resultado === 2) callback()
    else callbackError()
}

function sucesso(){
    console.log('Sucesso! A soma deu certo, ela é 2')
}

function erro(){
    console.log('A soma deu erro, não é 2')
}

soma()
*/

/*
//Modo Assincrono
function soma(callback, callbackError){
    const resultado = 1+1
    if (resultado === 2) callback()
    else callbackError()
}

soma(
    () => {console.log('Sucesso! a soma é 2')},
    () => {console.log('Erro! A soma não é 2')}
    )
*/

/*
const p = new Promise((resolve, reject) => {
    const resultado = 1+1
    if (resultado === 2) resolve('Sucesso! A soma deu 2.')
    else reject('Erro! A soma não deu 2.')
})

p
.then((mensagem) => {console.log(mensagem)})
.catch((mensagem) => {console.log(mensagem)})
*/

/*
const melhorProgramador = 'João Félix'

function oMelhor(callback, callbackErro){
    if (melhorProgramador == 'João Félix'){
        callback({
            nome: melhorProgramador,
            mensagem: 'humilde'
        })
    }
    else{
        callbackErro({
            mensagem01: 'Tá errado',
            mensagem02: melhorProgramador + ', sério? '
        })
    }
}

oMelhor(
    (objeto)=>{
        console.log(objeto.nome + ' é ' + objeto.mensagem)
    }, 
    (objeto)=>{
        console.log(objeto.mensagem02 + objeto.mensagem01)
})
*/


const p = new Promise((resolve, reject) => {
    const oMelhor = ''
    if (oMelhor === 'Mateus') resolve('A vida de programador ta indo né Mateus')
    else reject('Profissional já né ' + oMelhor)
})

p
.then((mensagem) => {console.log(mensagem)})
.catch((mensagem) => {console.log(mensagem)})