// MODULACIÓN Y FUNCIONES
console.clear()

// Hacer una función que reciba un numero y que retorne 
//verdadero si es par o falso en caso contrario.

function isEven(number) {
  var isEven = false
  if (number % 2 === 0) {
    isEven = true
  }
  console.log(isEven)
  return isEven
}

isEven(7)