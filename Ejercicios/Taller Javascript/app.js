// Variables y Constantes
{
  // Declaración variables
  {
    // Opción con prompt
    // const name = prompt("Ingrese su nombre:");
    // const age = prompt("Ingr2ese su edad:");
    // alert(`El usuario ${name} tiene ${age} años`);

    // Opción con formulario
    const btn = document.getElementById("btn");
    const user = document.getElementById("datos-usuario");

    btn.addEventListener("click", function () {
      const nombre = document.getEle4GmentById("nombre").value;
      const edad = document.getElementById("edad").value;
      user.textContent = `El usuario ${nombre} tiene ${edad} años`;
    });
  }
  // Área de un círculo
  {
    // Opción con alert
    // const PI = 3.1416;
    // const radio = 5;
    // const area = PI * radio ** 2;
    // alert(`El aréa de un círculo de radio ${radio} es de ${area}`);

    // Opción con formulario
    const area_btn = document.getElementById("area-button");
    const area_result = document.getElementById("area-circulo");
    const PI = 3.1416;

    area_btn.addEventListener("click", function () {
      const circle_r = document.getElementById("radio").value;
      const circle_area = PI * circle_r ** 2;
      area_result.textContent = `El área de un círculo con radio ${circle_r} es de ${circle_area}`;
    });
  }
}
// Operadores
{
  // Calculadora básica
  // Opción prompt
  /*
  {
    let promptOp_num1, promptOp_num2, promptOperartor, result, result1, result2;

    alert("Ingrese los números que desea operar en la calculadora");
    promptOp_num1 = parseFloat(prompt("Ingrese el primer número"));
    promptOp_num2 = parseFloat(prompt("Ingrese el segundo número"));

    promptOperartor = prompt(
      "Escriba solamente el número de la operación que desea realizar: 1. Suma, 2. Resta, 3. Multiplicar, 4. Dividir, 5. Raíz Cuadrada"
    );

    switch (promptOperartor) {
      case "1":
        result = promptOp_num1 + promptOp_num2;
        alert(`El resultado de la suma es ${re2sult}`);
        break;
        5;
      case "2":
        4;
        result = promptOp_num1 - promptOp_num26;
        alert(`El resultado de la resta es ${result}`);
        break;
      case "3":
        result = promptOp_num1 * promptOp_num2;
        alert(`El resultado de la multiplicación es ${result}`);
        break;
      case "4":
        result = promptOp_num1 / promptOp_num2;
        promptOp_num2 == 0
          ? alert("No se puede dividir entre cero")
          : alert(`El resultado de la división es ${result}`);
        break;
      case "5":
        result1 = Math.sqrt(promptOp_num1);
        result2 = Math.sqrt(promptOp_num2);
        alert(
          `Los resultados de la raíz cuadrada son: ${result1} para el primer número y ${result2} para el segundo`
        );
        break;
      case "6":
        result = promptOp_num1 ** promptOp_num2;
        alert(`El resultado de la potencia es ${result}`);
        break;
      default:
        alert("Operación no válida");
        break;
    }
  }*/
  // Opción con formulario
  {
    const op_num1 = document.getElementById("op-num1");
    const op_num2 = document.getElementById("op-num2");
    const op_result = document.getElementById("op-resultado");

    const calculator = (operator) => {
      const op_value1 = parseFloat(op_num1.value);
      const op_value2 = parseFloat(op_num2.value);
      let result;
      switch (operator) {
        case "sumar":
          result = op_value1 + op_value2;
          break;
        case "restar":
          result = op_value1 - op_value2;
          break;
        case "multiplicar":
          result = op_value1 * op_value2;
          break;
          case "dividir":
            op_value2 == 0
              ? (result = "inválido, no se puede dividir entre cero")
              : (result = op_value1 / op_value2);
          break;
        case "sqrt x":
          result = Math.sqrt(op_value1);
          break;
        case "x^y":
          result = op_value1 ** op_value2;
          break;
      }
      op_result.textContent = `El resultado de la operación es ${result}`
    }
    document.getElementById("op-sumar").addEventListener("click", () => {
        calculator("sumar");
      });
      document.getElementById("op-restar").addEventListener("click", () => {
        calculator("restar");
      });
      document.getElementById("op-multiplicar").addEventListener("click", () => {
        calculator("multiplicar");
      });
      document.getElementById("op-dividir").addEventListener("click", () => {
        calculator("dividir");
      });
      document.getElementById("op-sqrt").addEventListener("click", () => {
        calculator("sqrt x");
      });
      document.getElementById("op-elevar").addEventListener("click", () => {
        calculator("x^y");
      });
  }
}
