// Ejercicio recopilación de datos

// recopilación de datos personales.

// Esta función obtiene los datos de iuna petsona y los devuelve.

function obtenerDatosPersonales() {
  var datos = {
    nombre: window.prompt("Cómo te llamás?"),
    apellido: window.prompt("Cómo es tu apellido?"),
    edad: window.prompt("Cuántos años tenés?"),
    profesion: window.prompt("Cuál es tu profesión?"),
    animalFavorito: window.prompt("Cuál es tu animal favorito?")
  }
  // Se obtienen los datos de alguna forma
  

  // TODO: Devolver esta info en una estructura de datos
  return datos
}

let datosPersonales = obtenerDatosPersonales()
console.log(datosPersonales)

console.log(datosPersonales.profesion)

datosPersonales.procesado = true

console.log(datosPersonales)