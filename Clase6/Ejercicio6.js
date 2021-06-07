/* 6. Usuario y su perfil
Tenemos dos objetos, uno con la información de usuario, y otro con la información personal de dicho usuario, 
queremos obtener un solo objeto con toda la información.
resultado esperado
{ id: "123", username: "pepe24", nombre: "pepe", edad: 27, profesion: "programador" }
*/

const usuario1 = { id: "123", username: "pepe24" }
const usuario1perfil = { nombre: "pepe", edad: 27, profesion: "programador" }

let allInfo = {...usuario1, ...usuario1perfil}

console.log(allInfo)