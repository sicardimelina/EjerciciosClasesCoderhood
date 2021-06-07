// Ejercicio 3
// Contador 2: La venganza del contador

var limit = 10;
var counter = 0;
var final = 4;
var multipleNumbersOf3Counter = 0;
var sumAllNumbers = 0;
var evenNumbersCounter = 0;

while ((evenNumbersCounter < final) && (counter <= limit)) {
  if (counter % 3 === 0) {
    multipleNumbersOf3Counter++
  }
  if (counter % 2 === 0) {
    evenNumbersCounter++
  }
sumAllNumbers = sumAllNumbers + counter
counter++
}

console.log("The amount of multiple numbers of 3 is:", multipleNumbersOf3Counter)
console.log("The sum of all even number is:", sumAllNumbers)