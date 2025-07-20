//Actividad 1 
//Declarar variables y constantes en unam maraton

let Participante1 = 50 

let Participante2 = '50'

console.log(Participante1)
console.log(Participante2)

console.log(typeof Participante1)
console.log(typeof Participante2)

const MetrosTotales = 500
console.log(MetrosTotales)

//Array

let CuadrasObligatorias =['Belgrano', 'Avellaneda', 'Corrientes']

console.log(CuadrasObligatorias)

//array usando constructor

let calles = new Array("Belgrano, Avellaneda, Corrientes")
console.log(calles)
console.log(typeof calles)

// Funciones

function SaludarUsuario(){
    let saludo = prompt("¿Hola como estas?")
    let nombre = prompt("¿Como te llamas");
    alert("¡Bienvenido!"  + nombre + ", un gusto conocerte");
}
SaludarUsuario();

//bucle while o for contar del 1 - 10

let i = 1;

while (i <= 10){
    console.log("numero" + i); i++
}
//condicionales if else
let edad = prompt("ingresar edad");

if (edad >= 18) {
    alert ("Podes participar de la maraton")
} else  {
    alert ("No podes participar")
}