let pontos = 100
let rodada = 1

for (let rodada = 1; rodada <= 20; rodada++) {
    let dado = Math.round(Math.random() * 6) + 1

    if (dado % 2 == 1){
        pontos += 10
        console.log("Rodada atual: " + rodada + ". Valor do dado: " + dado + ". Pontuação Atual: " + pontos)
    }else if(dado % 2 == 0){
        pontos -= 5
        console.log("Rodada atual: " + rodada + ". Valor do dado: " + dado + ". Pontuação Atual: " + pontos)
    }else if (rodada % 3 === 0){
        pontos += 15
        console.log("Rodada atual: " + rodada + ". Valor do dado: " + dado + ". Pontuação Atual: " + pontos)
    }else if (rodada % 4 === 0){
        pontos -= 20
        console.log("Rodada atual: " + rodada + ". Valor do dado: " + dado + ". Pontuação Atual: " + pontos)
    }else if (pontos < 0){
        pontos -= Math.abs(pontos) * 2; 
        console.log("Rodada atual: " + rodada + ". Pontuação negativa, o jogador perdeu o dobro de pontos! Pontuação Atual: " + pontos)
    }
}
console.log("Pontuação final apos 20 rodadas: " + pontos)