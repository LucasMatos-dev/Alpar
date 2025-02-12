let produto = 1000
let desconto = 0
let cupom = "PROMO15"
let estado = "CE" //SP: 10, RJ: 20, Outros: 30
let frete = 0
const icmsMinimo = 12
const icmsMaximo = 25

if (cupom == "PROMO15") {
    desconto = 15 
}
else if (Math.random () >= 0.5) {
    desconto = 10
}
else {
    desconto = 0
}

switch (estado) {
    case "SP":
        frete = 10
        break;
    case "RJ":
        frete = 20
        break
    default:
        frete = 30
        break;
}

function icms() {
    return Math.random () * (icmsMaximo - icmsMinimo) + icmsMinimo
}

let icmsValor = icms()
let produtoComDesconto = produto - (produto * (desconto/100))
let produtoComFrete = produtoComDesconto + frete
let valorFinal = produtoComFrete + (produtoComFrete* (icmsValor/100))

console.log("Preço original do Produto: R$ " + produto)
console.log ("O Produto teve desconto? "  + (desconto > 0 ? "Sim" : "Não"))
console.log("Preço do produto com desconto: R$ " + produtoComDesconto.toFixed(2))
console.log("Preço do frete: R$ " + frete.toFixed(2))
console.log("Valor do ICMS " + icmsValor.toFixed(2) + "%")
console.log ("Valor final do produto R$ " + valorFinal.toFixed(2))
// dp