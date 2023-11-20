const pt = require("prompt-sync")({signit: true})

const nota = pt ("¿Cual es tu nota? => ");

let x = Number(nota)

if (x === 0||x === 1||x === 2){ 
    console.log("Muy deficiente")
}
else if (x === 3||x ===4 ){
    console.log("Insuficiente")
}
else if(x === 5){
    console.log("Suficiente")
}
else if(x === 6){
    console.log("Bien")
}
else if(x === 7||x=== 8){
    console.log("Notable")
}
else if(x === 9||x=== 10){
    console.log("Sobresaliente")
}