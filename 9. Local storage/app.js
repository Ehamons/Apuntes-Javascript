// Para guardar información en el localStorage usamos la función 'setItem'

// Variable nombreUsuario con el valor Liliana
let nombreUsuario = "Liliana";
// Se guarda la variable nombreUsuario en el localStorage con la llave "nombre"
localStorage.setItem("nombre", nombreUsuario);

// Definición del arreglo comida
const comida = ["Tamal", "Pescado", "Pasta", "Sushi"]
// Se guarda el arreglo comida en el localStorage con la llave "comidaFavorita"
localStorage.setItem("comidaFavorita", comida)

// Para obtener información en el localStorage  utilizamos el método 'getItem'

let datoGuardado = localStorage.getItem("comidaFavorita")
console.log(datoGuardado);

const parrafoComida = document.getElementById("comida")
parrafoComida.textContent = `La comida favorita de Liliana es: ${datoGuardado}`

// Ejercicio con JSON, DOM y localStorage:
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let birthdate = document.getElementById("birthdate")
let sendBtn = document.getElementById("sendBtn")

class Users{
    constructor(firstName, lastName, birthdate){
        this.firstName = firstName
        this.lastName = lastName
        this.birthdate = birthdate
    }
}

sendBtn.addEventListener("click", function(){
    let fnValue = firstName.value
    let lnValue = lastName.value
    let dateValue = birthdate.value;

    const user = new Users(fnValue, lnValue, dateValue)
    let array_users = []

    let localUsers = localStorage.getItem("users")
    // Si no es establece ninguna condición se asume que la condición es vacio
    if(localUsers){
        array_users = JSON.parse(localUsers)
    }
    array_users.push(user)

    localStorage.setItem("users", JSON.stringify(array_users))
    alert("Usuario registrado éxitosamente")
})

const show_registered_users = function () {
    let array_users = []
    let localUsers = localStorage.getItem("users")
    if(localUsers){
        array_users = JSON.parse(localUsers)
    }
    let users_list = document.getElementById("list_users")
    array_users.forEach(user => {
        let userValue = document.createElement("li")
        userValue.textContent = `Nombre: ${user.firstName} - Apellido: ${user.lastName} - Fecha de nacimiento: ${user.birthdate}`
        //appendChild permite agregar un elemento HTML desde JavaScript
        users_list.appendChild(userValue)
    });
}

show_registered_users()
// console.log(birthdate);
// const lnBtn = document. getElementById("bdBtn")
// console.log(birthdate);
// const bdBtn = document. getElementById("bdBtn")
// console.log(birthdate);



// let savedDate = localStorage.getItem("birthdate")
// const paragraphBD = document.getElementById("show_bd")
// paragraphBD.textContent = `La fecha de nacimiento es: ${savedDate}`