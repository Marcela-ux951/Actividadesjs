// //Actividad 1 
// //Declarar variables y constantes en unam maraton

// let Participante1 = 50 

// let Participante2 = '50'

// console.log(Participante1)
// console.log(Participante2)

// console.log(typeof Participante1)
// console.log(typeof Participante2)

// const MetrosTotales = 500
// console.log(MetrosTotales)

// //Array

// let CuadrasObligatorias =['Belgrano', 'Avellaneda', 'Corrientes']

// console.log(CuadrasObligatorias)

// //array usando constructor

// let calles = new Array("Belgrano, Avellaneda, Corrientes")
// console.log(calles)
// console.log(typeof calles)

// // Funciones

// function SaludarUsuario(){
//     let saludo = prompt("¿Hola como estas?")
//     let nombre = prompt("¿Como te llamas");
//     alert("¡Bienvenido!"  + nombre + ", un gusto conocerte");
// }
// SaludarUsuario();

// //bucle while o for contar del 1 - 10

// let i = 1;

// while (i <= 10){
//     console.log("numero" + i); i++
// }
// //condicionales if else
// let edad = prompt("ingresar edad");

// if (edad >= 18) {
//     alert ("Podes participar de la maraton")
// } else  {
//     alert ("No podes participar")
// }

//function practica
const USER = "admin"
const PASS = "12345"

let total = 0
let productos = ""



function  login(usuario, contraseña) {
        return usuario === USER && contraseña === PASS}
            


function inicioSesionFor() {
    for(let i = 0; i <3; i++) {
    
        let usuario = prompt("Ingresa tu nombre de usuario")
        let contraseña = prompt ("Ingrese su contraseña")
        

        if (login(usuario, contraseña)) {
        
            return true;
    } else {
        alert(`Credenciales incorrectas. Intento ${i + 1} de 3.`);
        }
    }
    alert("Demasiados intentos fallidos.");
    return false;
}
        


    function mostrarProducto() {
        let lista = "Nuestros productos son:\n1 - Bebidas\n2 - Infusiones"
        alert(lista)
    }
    function comprar(id) {
        
        switch(id) {
            case 1:
                total += 1
                productos += "Agua\n"
                alert("Usted sumo un Agua a su carrito.\nTotal actual: $" + total)
            break
            case 2:
                total += 2
                productos += "Té\n"
                alert("Usted sumo un Té a su carrito.\nTotal actual: $" + total)
            break
            case 3:
                total += 10
                productos += "Mate\n"
                alert("Usted sumo un Mate a su carrito.\nTotal actual: $" + total)
            break
            case 4:
                total += 5
                productos += "Cafe\n"
                alert("Usted sumo un Cafe a su carrito.\nTotal actual: $" + total)
            break
            default:
                alert("No tenemos ese producto")
            break

        }
    }
        function mostrarCarrito() {
            if(total === 0){
                alert("Usted no tiene NADA en el carrito");
            } else {
            alert("Los productos que usted compro son:\n" + productos + "Su total es de " + total)
        }

    }
    
    function menu() {
        let bandera = true

        while(bandera) {
        let opciones = Number(prompt(" Bienvenido a la tienda usted puede hacer lo siguiente:\n 1- Ver productos\n 2- Comprar con ID\n 3- Terminar la compra"))
        
        
    
    switch (opciones) {

        case 1:
            mostrarProducto()
            break

        case 2:
            mostrarProducto()
            let idProducto =Number(prompt(
                    "Nuestros productos son:\n1 - Agua 1$\n2 - Té 2$\n3 - Mate 10$\n4 - Cafe 5$\n\n\n¿que producto queres comprar?"))
                    comprar(idProducto)
            break

        case 3:
        mostrarCarrito()
        alert("Gracias por tu comprar. ¡Hasta pronto!")
        bandera = false
            break
        default:
            alert("Opcion invalida")
            break    
    }
    if (bandera){
        let seguir = confirm("¿Deseas seguir comprando?")
        if (!seguir) {
            alert("Sesion finalizada. ¡Gracias por tu visita, vuelva pronto!")
            break;
        }
    }
    
}
    }
let entroEnElMenu = inicioSesionFor()
    if(entroEnElMenu){
        menu()
    }else{
        alert("No entraste al menu")
    }
    