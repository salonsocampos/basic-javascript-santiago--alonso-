const scanner = require("prompt-sync")({ signit: true })

let cadenaInput = scanner("Introduce un texto -> ")
let palabra
let cadena ="" 

while (cadenaInput != "cancelar" ) {
    if (String(cadenaInput)) {
        palabra = String(cadenaInput)
        cadena = (cadena + palabra+ "-")
        
    } else {
        console.log('Solo se aceptan valores alfabeticos ')
    }
    cadenaInput = scanner("Introduce un texto -> ")
}

console.log('Has llegado al final, este es el resultado de la cadena= ' + cadena)
