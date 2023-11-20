const scanner = require("prompt-sync")({ signit: true })

let numeroInput = scanner("Introduce un numero -> ")
let num
let suma = 0;

while (numeroInput != "cancelar") {
    if (Number(numeroInput)) {
        num = Number(numeroInput)
        suma = (suma + num)
    } else {
        console.log('No entiendo ')
    }
    numeroInput = scanner("Introduce un numero -> ")
}

console.log('Has llegado al final, este es el resultado de la suma = ' + suma)



// console.log('DEBUG:numeroInput =>', numeroInput)
// console.log('DEBUG: typeof numeroInput =>', typeof(numeroInput))

// console.log('DEBUG:num =>', num)
// console.log('DEBUG: typeof num =>', typeof(num))