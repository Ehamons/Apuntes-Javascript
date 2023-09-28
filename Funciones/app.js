// En JavaScript las funciones se definen mediante la palabra function

// Funciones declaradas
/* Las funciones se establecen de manera global, por tanto, 
la función puede ser llamada incluso antes de ser creada*/

saludar("María", "45");

// Una función siempre debe tener un nimbre al cual yo pueda llamarla más tarde si la necesito
// Los parámetros, son cualquier dato que yo necesite para ejecutar la función, no son obligatorios ()

/*Estructura de una función declarada:
function numbreFuncion(parametros){
    Logica de la aplicacion    
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

// Funciones expresadas:
/* Hacen parte del ámbito local, es decir, sólo estarán  disponibles una vez se hayan creado. NO ANTES
Las funciones expresadas nunca están disponibles antes de que se declaren */

/*const nombreFuncion = function(parametros){}
  código que desee ejecutar;
}*/

const despedir = function () {
  return console.log("Muchas gracias por utilizar la App, hasta luego");
};

despedir();

// Ejemplo: Crear una función

const data_pet = function (nombre, edad) {
  return "Hola, mi mascota es ", nombre, " y tiene", edad, " años";
};

data_pet("Toby", "4");
data_pet("Luna", "12");

mascota = data_pet