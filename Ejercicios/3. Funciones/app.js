// Según lo anterior traiga un código que haga una función expresada para cada una de las siguientes operaciones
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

  //   switch (opcion) {
  //     case opcion == 1:
  //       resultado = sumar(a, b);
  //       break;
  //     case opcion == 2:
  //       resultado = restar(a, b);
  //       break;
  //     case opcion == 3:
  //       multiplicar(a, b);
  //       resultado = multiplicar(a, b);
  //       break;
  //     case opcion == 4:
  //       dividir(a, b);
  //       resultado = dividir(a, b);
  //       break;
  //     default:
  //       console.log("opción no válida");
  //       break;
  //   }

  console.log(resultado);
}
