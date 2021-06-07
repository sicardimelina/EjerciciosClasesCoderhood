//Ejercicio 1 - a
/* Reescribir la siguiente función tal que retorne una promesa que se cumpla luego de 3 segundos 
(usar setTimeout), devolviendo el mismo resultado que la función dada.

function dividirNumeros(dividendo, divisor) {
    return dividendo / divisor;
}
*/

function dividirNumeros(dividendo, divisor) {
    return new Promise(function(resolve, reject) {
        try {
            setTimeout( () => {
                resolve(dividendo/divisor);
            }, 3000); // está en milisegundos so 3s --> 3000ms
        } catch (error) {
            reject(error);
        }
    }
    )
}

// Ejercicio 1 - b
// Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado o imprimir un
//mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.


function programa() {
    let promesa = dividirNumeros(4,2);
    promesa.then((resultadoFinal) => { // arrowm function () => { }
            console.log("El resultado con .then-.cacht es: " + resultadoFinal);
        }
    ).catch((error) => {
        console.log("Hubo un error 🥲: " + error);
    }
    )
}

programa();

// Ejercicio 1 - c
// Reescribir la función programa del insiso anterior para que use async y await

async function programaAsync() {
    try {
    let resultado = await dividirNumeros(4,2);
    console.log("El resultado con async-await es: " + resultado)
    } catch (error){
        console.log(error.message)
    }
    
}

programaAsync();