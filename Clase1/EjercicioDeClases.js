// DATOS Y ALGORITMOS

console.log("~Video Juego~");
// Ejercicio durante la clase

var lifes = 0;
var lifePotions = 3;

if (lifes === 0) {
  if (lifePotions > 0) {
    lifes += 1;
    lifePotions -= lifePotions;
    console.log("You skip death 💀.", "Lifes left:", lifes);
  } else {
    console.log("Game Over 🤡");
  }
}