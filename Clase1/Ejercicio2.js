// La tienda de ropa

var price = 1500;
var increasePercentage = 50;
var finalPrice = price * (1 + increasePercentage / 100);

if (finalPrice > 4000) {
  console.log(
    "Updated price: $",
    finalPrice,
    "💸",
    "Price exceded by: $",
    finalPrice - 4000
  );
} else {
  console.log("Old price:$", price, "Updated price:$", finalPrice);
}