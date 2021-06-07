// Ejercicio 4: La secuancia de Fiboncci

var limit = 6;
var counter = 1;
var firstElement = 0;
var secondElement = 1;
var nextElement = 0;

while (counter <= limit) {
  nextElement = firstElement + secondElement
  console.log(firstElement)
  firstElement = secondElement
  secondElement = nextElement
  counter++
}