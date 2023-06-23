// Faça um algoritmo que faça a verificação de uma senha fornecida pelo
// usuário. A senha para acesso é ‘js1324’. Caso ele erre o acesso 3 vezes, o
// usuário será bloqueado. Teste todo o algoritmo para garantir que funcione
// 100%.


var readline = require(`readline-sync`)

var senhaValida = "js1234"
var contador = 3

function verificarSenha() {

var senhaInformada = readline.question("Informe a senha:")

if(senhaInformada == senhaValida){
    console.log("Senha valida!")
    console.log("Acesso permitido!")
}else {
    contador--
    console.log(`Senha incorreta! Tentativas restantes: ${contador}`)
    if(contador == 0){
        console.log("Acessso bloquado!")
    }else{
        verificarSenha()
    }
    
}
   
}
verificarSenha()
     


    


