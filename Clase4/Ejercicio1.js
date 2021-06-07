// ESTRUCTURA DE DATOS
console.clear()

// Dado un array de usuarios, indicar si existe un usario llamado Lucas

let usuarios = [
  {
    nombre: "Ema",
    edad: 27,
    habilidades: ["html, css, javascript, react"]
  },
  {
    nombre: "Melson",
    edad: 27,
    habilidades: ["mongodb, node, express"]
  }
]

let nombreBuscado = "Lucas"
let existeUsuario = false

for (let i = 0; i < usuarios.length ; i++) {
  if (usuarios[i].nombre === nombreBuscado) {
    existeUsuario = true
  }
}
console.log(existeUsuario)