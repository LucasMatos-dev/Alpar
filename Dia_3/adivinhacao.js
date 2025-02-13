const prompt = require ('prompt-sync') ()

let numeroFinal =  Math.round(Math.random() * 100);
console.log("Dica, o numero final é: " + numeroFinal)
let numeroEscolhido = prompt ("Tente adivinhar um numero de 0 a 100: ")
let tentativas = 1

while (numeroEscolhido!=numeroFinal) {
    if (numeroEscolhido > numeroFinal) {
        console.log ("O numero final é menor.")
        numeroEscolhido = prompt ("Tente novamente: ")
        tentativas++
    } else if (numeroEscolhido < numeroFinal) {
        console.log ("O numero final é maior.")
        numeroEscolhido = prompt ("Tente novamente: ")
        tentativas++
    }
}
console.log ("Voce acertou! o Numero final é " + numeroFinal)
console.log ("Voce precisou de " + tentativas + " tentativas para acertar.")

