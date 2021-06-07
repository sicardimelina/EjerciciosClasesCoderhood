// Cómo usar una promesa

function obtenerNumeroAsync() {
    return new Promise(function(resolve, reject) {
        try {
            setTimeout(() => {
                resolve(10)
            }, 2000);
        } catch (error) {
            reject(error)
        }
    }
    ) 
}

function callbackDeExito(resultadoFinal) {
    console.log("El número obtenido es: " + resultadoFinal)
}
function callbackDeFallo(errorOcurrido) {
    console.log("Lo sentimos, ocurrió un error: " + errorOcurrido)
}
const promesa = obtenerNumeroAsync()
promesa.then(callbackDeExito).catch(callbackDeFallo)

// Cómo crear una promesa

function funcionEjecutora(resolve, reject) {
    try {
        let resultado = 10;
        resolve(resultado)
    } catch (error) {
        reject(error)
    }
}
new Promise(funcionEjecutora)

// aync, await

async function programa() {
    try {
        const resultado = await obtenerNumeroAsync()
    } catch(error) {
        console.log("Lo sentimos, ocurrió un error: " + error);
    }
} programa()

// Función sleep min 58 clase

function sleep(milisegundos) {
    return new Promise((resolve, reject) => {
            try {
                if (milisegundos < 10000) {
                    setTimeout(() => {
                        resolve();
                    }, milisegundos)
                } else {
                    reject("Tanto tiempo no, dormilón 😴");
                }
        } catch(error) {
            reject(error);
        }
    }
    )
}

async function programa2() {
    try {
        console.log("Hola🌞");
        await sleep(2000);
        console.log("Chau🌝")
        await sleep(3000);
        console.log("Ya me fui");
    } catch (error) {
        console.log("Lo sentimos, ocurrió un error: " + error)
    }
    
}
programa2();