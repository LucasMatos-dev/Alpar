const prompt = require ('prompt-sync') ()

function criarPessoas(nome, idade, email) {
    return { nome, idade, email };
}
let pessoas = []

let sair = 0

while (sair == 0){
    console.log ("Gerenciar Usuários:")
    console.log ("1 - Adicionar usuário")
    console.log ("2 - Remover usuário")
    console.log ("3 - Exibir lista de usuários")
    console.log ("4 - Sair")
    console.log("")
 
    let opcao = (prompt("Escolha uma opção: "))

    switch (opcao){
        case "1":
            let nome = prompt("Digite o nome do usuário: ")
            let idade = Number(prompt("Digite a idade do usuário: "))
            while (isNaN(idade)){
                console.log("A idade precisa ser um numero.")
                idade = Number(prompt("Digite a idade do usuário: "))
            }
            let email = prompt("Digite o email do usuário: ")
            let emailExiste = pessoas.some (pessoa => pessoa.email === email)
            if(emailExiste){
                console.log("O email já existe!")
            } else {
                pessoas.push(criarPessoas(nome, idade, email))
                console.log ("Usuário " + nome + " adicionado!")
            }
            console.log("")
            pessoas + 1
            break
        case "2":
            let emailRemover = prompt("Digite o email do usuário que deseja remover: ")
            let indice = pessoas.findIndex(pessoa => pessoa.email === emailRemover)
            if (indice !== -1){
                let removido = pessoas.splice (indice, 1)[0]
                console.log("Usuário removido")
            } else {
                console.log("Usuário não encontrado.")
            }
            console.log("")
            break
        case "3":
            console.log("Lista de usuários:")
            console.log(pessoas)
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

