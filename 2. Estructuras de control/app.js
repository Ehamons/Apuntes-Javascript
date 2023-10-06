// console.log("*-----Estructuras de control-----*");

// If - Else

let edad = 32;
let nombre = "Liliana";

if (edad >= 18) {
  console.log("Bienvenida", nombre, "a la aplicación");
} else {
  console.log("Lo siento, no eres mayor de edad");
}

edad = 18;
nombre = "Juan";

if (edad > 18) {
  console.log(`Bienvenido ${nombre} tue edad es ${edad}`);
} else {
  console.log("Lo siento, no eres mayor de eda, tu edad es ", edad, "años");
}

// Operador ternario
/*
? => If - verdadero
: => Else - falso
*/

let mayorEdad = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mayorEdad);

// Estructura Switch
let opcion, num1, num2, resultado;
opcion = "Suma";
num1 = 12;
num = 54;

switch (opcion) {
  case "Suma":
    console.log("¡Escogiste la suma!");
    resultado = num1 + num2;
    break;
  case "Resta":
    console.log("¡Escogiste la resta!");
    resultado = num1 - num2;
    break;
  case "Multiplicación":
    console.log("¡Escogiste la multiplicación!");
    resultado = num1 * num2;
    break;
  default:
    console.log("Operación no definida");
    resultado = null;
    break;
}

console.log(resultado);

/* Comentarios de bloque */
// Comentarios de línea

/* Mientras (while): Se ejecuta siempre que la condición sea verdadera
Una vez que es falsa se sale del ciclo*/

let numero = 0;
// Imprimir todos los numeros hasta el 10

while (numero <= 10) {
  console.log("El número va en", numero);
  numero++;
}

/*Para (for): Se ejecuta un número determindado de veces*/

for (let i = 0; i <= 10; i++) {
  console.log("Mensaje del for", i);
}