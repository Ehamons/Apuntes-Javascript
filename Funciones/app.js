// En JavaScript las funciones se definen mediante la palabra function

// Funciones declaradas:------------------------------------------------------------------------------
/* Las funciones se establecen de manera global, por tanto, 
la función puede ser llamada incluso antes de ser creada*/

saludar("María", "45");

// Una función siempre debe tener un nombre al cual yo pueda llamarla más tarde si la necesito
// Los parámetros, son cualquier dato que yo necesite para ejecutar la función, no son obligatorios ()

/*Estructura de una función declarada:

function numbreFunción(parámetros){
    Lógica de la aplicacion    
}*/

function saludar(nombre, edad) {
  console.log(`Mi nombre es ${nombre} y mi edad es ${edad} años`);
}
// Las funciones no se ejecutan hasta ser llamadas
saludar("Liliana", "32");
saludar("Sebastían", "26");

function sumar(a, b) {
  // Valor de retorno: Valor que devuelve la función una vez ha sido llamada
  let resultado;
  resultado = a + b;
  return resultado;
}

console.log(sumar(23, 58));


// Funciones expresadas:------------------------------------------------------------------------------
/* Hacen parte del ámbito local, es decir, sólo estarán  disponibles una vez se hayan creado. NO ANTES
Las funciones expresadas nunca están disponibles antes de que se declaren */

/*const nombreFuncion = function(parametros){
  código que desee ejecutar;
}*/

const despedir = function () {
  return console.log("Muchas gracias por utilizar la App, hasta luego");
};

despedir();

// Ejemplo: Crear una función expresada que devuelva el nombre de mi mascota y cuantos años tiene

const data_pet = function (nombre_mascota, edad_mascota) {
  return "Hola, mi mascota es ", nombre_mascota, " y tiene", edad_mascota, " años";
};

data_pet("Toby", "4");
data_pet("Luna", "12");

// Alertas:------------------------------------------------------------------------------
/* Las alertas permiten mostrar salidas o información en el navegador */

alert("Hola! Esta es mi primera alerta")

// Prompt:------------------------------------------------------------------------------
/*Permiten al usuario ingresar información que va a ser recibida por nosotros*/

let mensaje = prompt("Hola, es es mi primer prompt. Por favor deja tu mensaje")
alert(mensaje)

/*Al recibir inforación puede que no nos llegue en el formato que deseamos, por tanto es
necesario convertir esa información, para ello se pueden usar estos comandos*/

// De tipo number (numérico) a string (carácter):
{
let numero = 1;
console.log(numero.toString())
}

// De tipo string (carácter) a number (numérico):
{let numeroTexto = "2"

// Para esto se pueden usar dos comandos:
// parseInt: método para pasar de texto a el tipo de dato entero
// parseFloat método para pasar de texto a tipo de dato Real o que reciba decimales

console.log(parsefloat(numeroTexto))
}