// Para definir una variable global utilizo var
var variable = "Hola, esta es mi variable";
// Para imprimir el valor de la variable en consola utilizo utilizo console.log()
console.log(variable);

variable = "Segundo nombre de la variable";
console.log(variable);

variable = 2345678;
console.log;

var variableDos;
console.log(variableDos);

variableDos = "Segunda variable";
console.log(variableDos);

// Variables locales (Se definen con let)
// Un bloque de código e cualquier código que este encerrado entre llaves {}
{
  let variableLocal = "Primer valor";
  console.log(variableLocal);
  var variableGlobal = "Variable global";
  console.log(variableGlobal);
}

console.log(variableGlobal);
// console.log(variableLocal) *la consola arroja error al no encontrarlo

// Las variables locales sólo corren dentro de un bloque de código, mientras que las globales siempre están presentes en todo el documento

// Una buena práctica es sólo usar variables locales, ya que las globales consumen más recursos al estar siempre ocupando recursos

console.log("*-----Tipos de variables-----*");

// Típos de variables

// Carácter (string): Sólo se utilizan comillas para las variables de caracteres
let caracter = "José";
console.log(caracter)

// Número (number): Números enteros o decimales
let numero = 14;
console.log(numero)

// Booleano (boolean): variables con dos posibles valores: True (Verdadero) o False (Falso)
let datoBooleano = true;
console.log(datoBooleano)

// Nula (null): variables que no tienen ningún valor
let variableNula = null;
console.log(variableNula)

// Contantes: Es un dato que no va a cambiar
const PI = 3.1416;
console.log(PI);

console.log("*-----Operadores aricméticos-----*");

// Operadores aricméticos
let num1, num2, resultado;

num1 = 65;
num2 = 87;
// Suma
resultado = num1 + num2;
console.log("El resultado de la suma es: " + resultado);
// Resta
resultado = num1 - num2;
console.log("El resultado de la resta es: ", resultado);

// Si se le añade un (+) se concatena como texto
// Si se utiliza (,) se concatena del mismo tipo que estaba antes

// Multiplicación
resultado = num1 * num2;
console.log("El resultado de la multiplicación es: ", resultado);
// División
resultado = num1 / num2;
console.log("El resultado de la división es: ", resultado);

// Operaciones combinadas
resultado = (num1 * num2) / (num2 - num1);
console.log("Resultado de (num1*num2)/(num2-num1): ", resultado);

num1 = num1 + 1;
// Incremento, aumenta la variable de una unidad
num2++;
console.log(num1);
console.log(num2);

// Decremento, reduce la variable en una unidad
num1--;
num2--;
console.log(num1);
console.log(num2);

console.log("*-----Operadores de comparación-----*");

num1 = 13;
num2 = 5;

// Mayor que
resultado = num1 > num2;
// Menor que
resultado = num1 < num2;
// Mayor o igual que
resultado = num1 >= num2;
// Menor o igual que
resultado = num1 <= num2;
/* Igual me permite comparar tanto números como caracteres*/
// ==Compara el valor, pero no el tipo de dato
// === Compara el valor y el tipo de dato
resultado = num1 == num2;
resultado = num1 === num2;
resultado = "Liliana" == "Lili";
// Distinto
resultado = num1 != num2;

console.log("*-----Operadores lógicos-----*");

// El operador Y (AND) &&
// Verdadero=> True
// Falso => False
resultado = true && true;
console.log(resultado);

//Operador O (OR) ||
resultado = false || false;
console.log(resultado);

//Negación (!)
resultado = !true;
console.log(resultado);
