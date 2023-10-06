//Como obtener un elemento en el documento HTML por medio de los selectores
{
  /* El comando 'document' hace referencia al documento HTML,
luego se añade .metodo para especificar la acción que se quiere realizar,
es decir, se usa el comando 'document.metodo'*/

  /* Con getElementByTagName (importante respetar mayúsculas y minúsculas) se obtienen los elementos
que contienen una etiqueta específica*/
  console.log(document.getElementsByTagName("h2"));
  /* Con getElementsByClassName (importante respetar mayúsculas y minúsculas) se obtienen los elementos
que contienen la clase mencionada*/
  console.log(document.getElementsByClassName("elemento-selector"));
  /*Para obtener un elemento HTML por id se usa getElementById*/
  console.log(document.getElementById("main-title"));

  /*Para acceder a un elemento en especifico ya sea seleccionando por etiqueta o por clases podemos
utilizar la misma sintaxis que se usa para llamar un elemento específico con los arreglos,
si sólo queremos llamar al contenido dentro de la etiqueta usamos .innerText*/
  console.log(document.getElementsByTagName("li")[2]);
  console.log(document.getElementsByTagName("li")[2].innerText);
}

// Cómo agregar contenido en el documento HTML
{
  // Se guarda en una variable el id que se busca modificar
  let parrafo = document.getElementById("parrafo");
  console.log(parrafo);

  /* Para añadir contenido se llama la variable guardada y con '.textContent' se define
  el mensaje que se desea escribir en el HTML*/
  parrafo.textContent = `Hola, este es mi primer parrafo por medio del DOM`;
  console.log(parrafo);

  let numUno = 15,
    numDos = 26;
  parrafo.textContent = `Traido desde el DOM, el resultado de la suma es: ${
    numUno + numDos
  }`;

  // Para crear un elemento desde el DOM usamos '.createElement'
  let parrafo2 = document.createElement("p");

  //   parrafo2.getAttribute(class: "pa")

  //   console.log(getElementsByClassName("parrafo-dos"));
}

// Cómo interactuar con un elemento en el HTML
{
  let botonFormulario = document.getElementById("boton-formulario");

  /*Con '.addEventListener' podemos crearle eventos a nuestros botones,
  el primer atributo se escribe entre comillas y define ante qué reacciona el evento,
  por ejemplo con "click", luego en el segundo atributo se escribe la función que desea ser ejecutada*/
  botonFormulario.addEventListener("click", function () {
    let nombreFormulario = document.getElementById("nombre");
    //value permite obtener el valor que ingresa en una entrada de un formulario
    let parrafoRestulado = document.getElementById("resultadoFormulario");
    parrafoRestulado.textContent = nombreFormulario.value;
  });
}

// Calculadora usando DOM
{
/*
  // Se crea la variable resultado para guardar los resultados de las operaciones que realicemos
  let resultado;
  // Obtengo por medio del DOM y del ID los elementos para la calculadora
  let botonSumar = document.getElementById("sumar");
  let botonRestar = document.getElementById("restar");
  let botonMultiplicar = document.getElementById("multiplicar");
  let botonDividir = document.getElementById("dividir");
  let impresionResultado = document.getElementById("resultadoCalculadora");

  //Cuando se le da click al botonSumar etonces el ejecuta la siguiente funcion
  botonSumar.addEventListener("click", function () {
    //Obtener los numeros del formulario por medio del id, pero como el getElement obtiene TODO el
    // elemento (hasta el HTML) y nosotros solo necesitamos el valor, utilizamos la propiedad value
    // para extarer el valor de la entrada
    // Queremos que los datos recibidos sean number en lugar de string, por ello usamos el método parseFloat()
    let numeroUno = parseFloat(document.getElementById("num1").value);
    let numeroDos = parseFloat(document.getElementById("num2").value);
    //Una vez tengo los datos, realizo la operación suma
    resultado = numeroUno + numeroDos;
    impresionResultado.textContent = `El resultado de la suma es: ${resultado}`;
  });

  botonRestar.addEventListener("click", function () {
    let numeroUno = parseFloat(document.getElementById("num1").value);
    let numeroDos = parseFloat(document.getElementById("num2").value);
    resultado = numeroUno - numeroDos;
    impresionResultado.textContent = `El resultado de la resta es ${resultado}`;
  });

  botonMultiplicar.addEventListener("click", function () {
    let numeroUno = parseFloat(document.getElementById("num1").value);
    let numeroDos = parseFloat(document.getElementById("num2").value);
    resultado = numeroUno * numeroDos;
    impresionResultado.textContent = `El resultado de la multiplicación es ${resultado}`;
  });

  botonDividir.addEventListener("click", function () {
    let numeroUno = parseFloat(document.getElementById("num1").value);
    let numeroDos = parseFloat(document.getElementById("num2").value);
    if (numeroDos == 0) {
      impresionResultado.textContent = `No se puede dividir entre cero`;
    } else {
      resultado = numeroUno / numeroDos;
      impresionResultado.textContent = `El resultado de la división es ${resultado}`;
    }
  });
  */
}
// Optimizamos la calculadora usando funciones

const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const print = document.getElementById("resultadoCalculadora");

const calculator = (operator) => {
  const value1 = parseFloat(number1.value);
  const value2 = parseFloat(number2.value);
  let result;
  switch (operator) {
    case "sumar":
      result = value1 + value2;
      break;
    case "restar":
      result = value1 - value2;
      break;
    case "multiplicar":
      result = value1 * value2;
      break;
    case "dividir":
      value2 == 0
        ? (result = "inválido, no se puede dividir entre cero")
        : (result = value1 / value2);
      break;
  }
  print.textContent = `el resultado al ${operator} es ${result}`;
};

document.getElementById("sumar").addEventListener("click", () => {
  calculator("sumar");
});
document.getElementById("restar").addEventListener("click", () => {
  calculator("restar");
});
document.getElementById("multiplicar").addEventListener("click", () => {
  calculator("multiplicar");
});
document.getElementById("dividir").addEventListener("click", () => {
  calculator("dividir");
});
