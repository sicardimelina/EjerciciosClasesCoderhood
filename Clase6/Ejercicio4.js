/* Nuestro software de reconocimiento de voz funciona de una forma un poco particualar, 
y el texto reconocido nos lo envía en un arreglo de silabas. Dado el siguiente array, obtener un string con todo el texto de corrido.

resultado esperado
"¡Hola, mundo! ¿Todo bien? Me alegro."
*/

const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do", "bien?", "Me", "a", "le", "gro."]

let texto = ""

silabas.forEach(
    function (silaba) {
        return texto += silaba
    }
)

console.log(texto)

