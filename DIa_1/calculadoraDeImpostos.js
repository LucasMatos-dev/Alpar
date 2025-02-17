let produto = 120
let desconto = 0
const icmsMinimo = 12
const icmsMaximo = 25

if (produto >= 1000) {
    desconto = 15 
}
else if (produto >= 100) {
    desconto = 10
}

function icms() {
    return Math.random () * (icmsMaximo - icmsMinimo) + icmsMinimo
}
let icmsValor = icms()
let produtoComDesconto = produto - (produto * (desconto/100))
let valorFinal = produtoComDesconto + (produtoComDesconto* (icmsValor/100))

console.log("Preço original do Produto: " + produto)
console.log ("O Produto teve desconto? "  + (desconto > 0 ? "Sim" : "Não"))
console.log("Preço do produto com desconto: " + produtoComDesconto.toFixed(2))
console.log("Valor do ICMS " + icmsValor.toFixed(2) + "%")
console.log ("Valor final do produto " + valorFinal.toFixed(2))
// dp