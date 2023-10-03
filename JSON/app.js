// Creación de un objeto persona
const persona = {
  nombre: "Jennifer",
  apellido: "Martinez",
  edad: 26,
  estatura: 1.65,
  peso: "65kg",
  sexo: "F",
  fecha_nacimiento: "02/10/1997",
};

// Accediendo a la información del objeto
// Para acceder a la información de un objeto se puede acceder mediante
// nombreObjeto.nombrePropiedad
console.log(persona.nombre);
console.log(persona.estatura);

// Modificando una propedad
console.log(persona.peso);
persona.peso = "60kg";
console.log(persona.peso);

// Agregando nuevas propiedades
persona.ciudad = "Bogotá"
console.log(persona);

// convertir un objeto a formato JSON
let objeto_json = JSON.stringify(persona)
console.log("Objeto persona convertido a JSON");
console.log(objeto_json);

// Convertir de formato JSON a objeto
let json_objeto = JSON.parse(objeto_json)
console.log("JSON persona convrtido nuevamente a objeto");