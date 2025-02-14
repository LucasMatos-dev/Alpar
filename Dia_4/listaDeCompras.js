const prompt = require ('prompt-sync') ()

let listaDeCompras = new Array ()
let sair = 0

while (sair == 0){
    console.log ("Lista de Compras:")
    console.log ("1 - Adicionar item")
    console.log ("2 - Remover item")
    console.log ("3 - Exibir lista")
    console.log ("4 - Sair")
    console.log("")
 
    let opcao = (prompt("Escolha uma opção: "))

    switch (opcao){
        case "1":
            let item = prompt("Digite o nome do item: ")
            listaDeCompras.push(item) 
            console.log ("Item " + item + " adicionado!")
            console.log("")
            listaDeCompras + 1
            break
        case "2":
            item2 = prompt("Digite o nome do item para remover: ")
            let removerItem = listaDeCompras.indexOf(item2)
            listaDeCompras.splice(removerItem, 1)
            console.log ("Item " + item2 + " removido!")
            console.log("")
            break
        case "3":
            console.log("Lista de compras:")
            console.log(listaDeCompras)
            console.log("")
            break
        case "4":
            sair = 1
            console.log ("Programa encerrado.")
            break
        default:
            console.log("Item inserido Invalido.\n")
    }
}

