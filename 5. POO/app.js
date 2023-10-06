// Clases:
// Se recomienda que la primera letra del nombre de la clase se escriba en mayúscula

class Mascota {
  //Definición de una clase
  // El constructor es la plantilla para los atributos de mis objetos creados con la clase
  // Instanciar es crear un nuevo objeto por medio de la clase
  constructor(nombre, edad, adoptado) {
    // this hace referencia a la misma clase
    // Estos son los atributos que van a compartir todas las macotas creadas con la clase mascota
    this.nombre = nombre;
    this.edad = edad;
    this.adoptado = adoptado;
  }
  comer() {
    return "Estoy comiendo";
  }
  saludar() {
    return "Hola, soy una mascota";
  }
}

// Usar [box]new es un atajo para crear un nuevo objeto
const tara = new Mascota("Tara", 5, true);
const toby = new Mascota("Toby", 8, true);
// No es obligatorio completar todos los campos para que se guarde el objeto
const zeus = new Mascota("Zeus");
const noname = new Mascota(undefined, 1);

console.log(tara);
console.log(toby);
console.log(zeus);
console.log(noname);

// Métodos:
// Acciones que pueden realizar los objetos
console.log(toby.comer());

// Propiedades
console.log(`¿Tara es adoptada? ${tara.adoptado}`);

// Herencia
// Son extensiones derivadas de una clase principal añadiendo nuevos atributos
// Existen dos tipos de clases para las herencias
// Clase padre: Es de donde se deriva la nueva clase y que lega métodos y propiedades a la clase hijo
// Clase hijo: Es la nueva clase que se crea con base en la clase padre
class Perro extends Mascota {
  constructor(nombre, edad, adoptado, tamanio) {
    // Super es el método que va a llamar al constructor de la clase padre
    super(nombre, edad, adoptado);
    this.tamanio = tamanio;
  }
  ladrar() {
    return "Guau guau";
  }
}

// Instanciar un clase hijo
const tinny = new Perro("Tinny", 7, true, "Grande");
console.log(tinny);
console.log(tinny.saludar());

class Ave extends Mascota {
  constructor(nombre, edad, adoptado, pico) {
    super(nombre, edad, adoptado);
    this.pico = pico;
  }
  volar() {
    return "Estoy volando";
  }
  cantar() {
    return "Estoy cantando";
  }
  // Setters y Getters
  // Get es el método que obtiene algún valor de la clase
  get getPico() {
    return this.pico;
  }
  // Set es el método que obtiene algún valor de la clase que en un primer momento no se establece en la clase
  set setPlumas(plumas) {
    this.plumas = plumas;
  }
}

const rio = new Ave("Río", 2, false, "robusto");
console.log(rio);
console.log(rio.cantar());
console.log(rio.getPico);

// Set es útil para la información que no es obligatoria pero que se puede preguntar para añadirla a la base de datos
rio.setPlumas = "Largas";
console.log(rio.plumas);

class Gato extends Mascota {
  constructor(nombre, edad, adoptado, pelaje) {
    super(nombre, edad, adoptado);
    this.pelaje = pelaje;
  }
  maullar() {
    return "Miau Miau";
  }
  ronronear() {
    return "Rrr-Rrrr";
  }
  // Sobreescribir un método
  saludar() {
    return `Hola, soy una mascota y mi nombre es ${this.nombre}, digo...`;
  }
}

const garfield = new Gato("Garfield", 3, true, true);
console.log(garfield);
console.log(garfield.comer(), "lasagna");
console.log(garfield.saludar(), garfield.maullar());
