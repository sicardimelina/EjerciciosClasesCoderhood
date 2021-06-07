/*
3) Descarga de informacion prohibida
Crear una funcion llamada pedirUsuario que retorna un usuario al azar de la siguiente lista:
let lista = [{
    id: 19310,
    nombre: "Bautista",
},{
id: 90010,
    nombre: "Ema",
},{
id: 00519,
    nombre: "Lucas",
},{
id: 00000,
    nombre: "Meison",
}
]
 
La funcion pedirUsuario disparar un error llamado 'ForbiddenInformation' si el usuario elegido es el del id = 00000
Llamar a la funcion pedirUsuario dentro de la funcion pedirInformacion para cambiar el retorno de la funcion pedirInformacion.
Considerar que la funcion pedirInformacion ahora tiene que capturar un error, cuando la capture debe disparar un error 'NetworkError'.
*/

let lista = [
{
    id: 19310,
    nombre: "Bautista",
},
{
    id: 90010,
    nombre: "Ema",
},
{
    // Si pongo el número como estaba en el ejercicio con los 0 antes --> 00519, JavaScript toma el número como octal e imprime otro número.
    id: 519,
    nombre: "Lucas",
},
{
    id: 00000,
    nombre: "Meison",
}
]

function pedirUsuario() {
    let randomArrayIndex = Math.floor(Math.random()*lista.length)
    let user = lista[randomArrayIndex]
    if (user.id == 00000 ) {
        throw new Error("Forbidden Information");
    }
    return user
}

function pedirInformacion() {
    try {
        let user = pedirUsuario();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

pedirInformacion()