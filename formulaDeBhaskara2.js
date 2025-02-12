let a = 0, b = -3, c = 2
let delta = b**2 - 4*a*c
let bhaskaraPositivo = (-b + delta ** 0.5) / (2*a)
let bhaskaraNegativo = (-b - delta ** 0.5) / (2*a)

if (a==0){
    console.log ("A Variavel A é igual a 0.")
}
else if (delta > 0) {
    console.log("Existem duas raízes reais, a positiva: " + bhaskaraPositivo + ". E a negativa: " + bhaskaraNegativo + ".")
}
else if (delta == 0) {
    console.log("Existe apenas uma raiz real, o valor dela é: " + bhaskaraPositivo)
}
else {
    console.log("A equação quadratica não tem raizes reais.")
}