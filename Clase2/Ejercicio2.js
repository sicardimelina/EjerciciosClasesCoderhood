// Ejercicio 2: Contador

var limit = 20;
var counter = 0;
var smallNumbersCounter = 0;
var oddNumberCounter = 0;

while (counter <= limit) {
  if (counter % 2 !== 0) {
  oddNumberCounter++
  }
  if (counter < limit / 2) {
    smallNumbersCounter++
  }
  counter++
}
console.log("The amount of odd numbers is", oddNumberCounter)
console.log("The amount of numbers smaller than limit/2 is", smallNumbersCounter)
