// 1) Las galletitas de Ema

let eggs = 3;
let chocolateBar = 1;
let flourWeight = 0.5;
let sugarSpoons = 5;

var availableEggs = 3;
var availableChocolateBar = 1;
var availableFlourWeight = 0.5;
var availableSugarSpoons = 5;

var hasAllIngredients = true;

if (availableEggs < eggs) {
  hasAllIngredients = false;
  var eggsMissing = eggs - availableEggs;
  console.log("Buy", eggsMissing, "eggs 🥚");
}
if (availableChocolateBar < chocolateBar) {
  hasAllIngredients = false;
  var chocolateMissing = chocolateBar - availableChocolateBar;
  console.log("Buy", chocolateMissing, "chocolate Bar 🍫");
}
if (availableFlourWeight < flourWeight) {
  hasAllIngredients = false;
  var flourMissing = flourWeight - availableFlourWeight;
  console.log("Buy", flourMissing, "grams of flour");
}
if (availableSugarSpoons < sugarSpoons) {
  hasAllIngredients = false;
  var sugarMissing = sugarSpoons - availableSugarSpoons;
  console.log("buy", sugarMissing, "table spoons 🥄 of sugar");
}
if (hasAllIngredients) {
  console.log("You have all the ingredients! You can bake your cookies 🍪");
}