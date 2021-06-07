/*
2) Simulador de descarga de informacion

Cuando queremos descargar informacion de internet, varias cosas pueden ir mal: desconexion de internet, corte de luz, 
perdida de informacion por culpa de seres desconocidos. Crear una funcion llamada pedirInformacion que no recibe 
parametros y que devuelve el siguiente objeto que corresponde a los datos de un usuario: 
let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" }

La funcion pedirInformacion tiene:
25% de posibilidades de disparar un error por desconexion de internet, el nombre del error es 'NetworkError'
18% de posibilidades de disparar un error por error del servidor, el nombre del error es 'InternalError'
10% de posibilidades de disparar un error por una anomalia, el nombre del error es 'AlienError'
 
Cuando se llame a la funcion, informar:
Si hubo un error, informar segun el mensaje del error:
NetworkError => informar "Hubo un problema en la conexion de internet" 
InternalError => informar "Hubo un error interno en el el servidor" 
AlienError => informar "Una anomalia intercepto la informacion"
Si no hubo un error, informar el objeto persona
*/


let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" } 

function pedirInformacion() {
    let random = Math.random()
    if (random < 0.25) {
        throw new Error("Hubo un problema en la conexion de internet")
    }
    if (random < 0.18) {
        throw new Error("Hubo un error interno en el el servidor")
    }
    if (random < 0.10) {
        throw new Error("Una anomalia intercepto la informacion")
    }
    return persona
}

try {
    let result1 = pedirInformacion();
    console.log(result1)
} catch (error) {
    console.log(error.message)
}