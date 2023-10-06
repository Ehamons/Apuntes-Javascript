// Una API FETCH es un intermediario que puede ayudar en la
// comunicación entre dos programas y así puedan compartir información

// Para traer los datos de JSON usamos el comando fetch
// Se realiza la solicitud con fetch a la página de JSON placeholder
fetch("https://jsonplaceholder.typicode.com/users")
  // Una vez se hace la solicitud  a JSON placeholdder tenemos una respuesta
  // Esta respuesta se guarda en response
  // Luego transformamos esa respuesta y la guardamos en formato JSON
  .then((response) => response.json())
  // Cuando ya tenemos esos datos en formato JSON podemos acceder a ellos por medio de data

  .then((data) => {
    data.forEach((elemento) => {
      console.log(`El nombre del usuario es: ${elemento.name}`);
    });
  })

  //Si ocurre algun error utilizamos catch
  .catch((e) => console.error(e));

//Hacer un API FETCH que traiga los elementos del comments de jsonplaceholder https://jsonplaceholder.typicode.com/comments e imprimir el siguiente mensaje por cada uno de los elementos en el json
// El correo ${elemento.email} dejo el siguiente mensaje ${elemento.body}

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((comments_response) => comments_response.json())

  .then((new_data) => {
    new_data.forEach((elemento2) => {
      console.log(
        `El correo ${elemento2.email} dejo el siguiente mensaje ${elemento2.body}`
      );
    });
  });

// API FETCH para el JSON de datos
fetch("datos.json")
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log(datos);
    datos.forEach(persona => {
      console.log(
        `${persona.nombre} ${persona.apellido} tiene ${persona.edad} y su número de telefono es ${persona.contacto.telefono}`
      );
    });
  });