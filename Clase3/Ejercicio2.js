// Hacer una función que reciba una serie de palabras separadas 
// por espacios y que imprima la misma frase pero en orden inverso.

function reverseWords(words) {
    let reversedString = "";
     for (let i = words.length - 1; i >= 0; i--) {
       reversedString += words[i];
     }
     return reversedString;
  }
  console.log(reverseWords("Hello this is a text"))