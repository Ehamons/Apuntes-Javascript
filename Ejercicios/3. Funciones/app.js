//Ejercicio: Crear una funcion EXPRESADA que devuelva el nombre de ustedes, el nombre de sus mascotas y la edad de nosotros
{
  const owner_pet = function (nombre, age, pet_name) {
    return `Hola, mi nombre es ${nombre}, tengo ${age} años y mi mascota se llama ${pet_name}`;
  };

  console.log(owner_pet("Elkin", 23, "Pecas"));
}
// Ejercicio: Según lo anterior traiga un código que haga una función expresada para cada una de las siguientes operaciones
// 1. Suma
// 2. Resta
// 3. Multiplicación
// 4. División

// Para seleccionar la operación que se quiere realizar haga un menú con la estructura de control

{
  let a, b, opcion, resultado;

  const sumar = function (a, b) {
    return a + b;
  };
  const restar = function (a, b) {
    return a - b;
  };
  const multiplicar = function (a, b) {
    return a * b;
  };
  const dividir = function (a, b) {
    if (b == 0) {
      console.log("No se puede dividir entre cero");
    } else {
      return a / b;
    }
  };

  console.log("Bienvenido a Calculadora Back-End,");
  console.log("selecciona un número según la operación que desees hacer:");

  console.log("1 para Sumar");
  console.log("2 para restar");
  console.log("3 para multiplicar");
  console.log("4 para dividir");

  opcion = prompt();
  console.log(opcion);

  console.log("Dime el primer número que quieres operar");
  a = parseFloat(prompt());
  console.log(a);

  console.log("Dime el segundo número que quieres operar");
  b = parseFloat(prompt());
  console.log(b);

  opcion == 1
    ? (resultado = sumar(a, b))
    : opcion == 2
    ? (resultado = restar(a, b))
    : opcion == 3
    ? (resultado = multiplicar(a, b))
    : opcion == 4
    ? (resultado = dividir(a, b))
    : console.log("opción no válida");

  console.log(resultado);
}
// document.open ()

// Ejercicio: Según lo anterior haga un código que con funciones expresadas haga una función relacion(a, b) que a partir de dos números cumpla lo siguiente:
/*
  1. Si el primer número es mayor que el segundo, debe devolver 1.
  2. Si el primer número es menor que el segundo, debe devolver -1.
  3. Si ambos números son iguales, debe devolver un 0.*/

{
  let a, b, print;

  alert("Bienvenido al comparador de números,  selecciona dos números: Si el primero es mayor que el segundo se retorna 1, si el segundo es mayor que el primero se retorna -1, si ambos son iguales se retorna cero")
  a = parseFloat(prompt("Escriba el primer número"));
  b = parseFloat(prompt("Escriba el segundo número"));

  const comparador = function (a, b) {
    a > b ? (print = 1) : a < b ? (print = -1) : (print = 0);
    return print;
  };

  alert(comparador(a, b));
}
