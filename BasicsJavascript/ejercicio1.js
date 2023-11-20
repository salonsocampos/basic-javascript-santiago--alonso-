const pt = require("prompt-sync")({signit: true})

const nombre = pt ("¿Cual es tu nombre? => ");
const edad = pt ("¿Cual es tu edad? => ");
if (edad >= 18){
    console.log(nombre + " ya puede conducir ")
}
else {
    console.log(nombre + " no puede conducir ")}