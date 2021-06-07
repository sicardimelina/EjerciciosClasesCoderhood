// Ejercicio taller

/* Un taller mecánico tiene una lista de autos para arrglar en el día,
de cada auto sabemos:
- Nombre del dueño
- Valor del arreglo
- Tiempo que tarda el arreglo (en horas)
- Lista de repuestos necesarios

El dueño del taller quiere saber:
1. Cuál es el arreglo más caro y los repuestos que necesita
2. Todos los arreglos para personas que se llaman Juan
3. El precio total de los arreglos
 
*/

let autos = [
  {
    dueño: "Pepe",
    costo: 300,
    tiempo: 7,
    respuestos: [
      "bujía",
      "carburador"
    ]
  },
  {
    dueño: "Juan",
    costo: 100,
    tiempo: 8,
    respuestos: [
      "bujía",
      "bomba de agua"
    ]
  },
  {
    dueño: "Meli",
    costo: 1000,
    tiempo: 10,
    respuestos: [
      "bujía",
      "correa"
    ]
  }
]

function repuestosArregloMásCaro() {
  let soloCostos = 0;
  let position = 0;
  let repuesto = "";
  for (let i = 0; i < autos.length; i++) {
    if (autos[i].costo > soloCostos) {
      soloCostos = autos[i].costo;
      position = i;
    }
}
repuesto = autos[position].respuestos
return repuesto
}

console.log(repuestosArregloMásCaro())

function arreglosParaJuan() {
  let arreglo = 0
  for(let i = 0; i < autos.length; i++) {
    if (autos[i].dueño === "Juan") {
      arreglo += autos[i].costo
    }
  }
  return arreglo
}

console.log(arreglosParaJuan())

function gananciaTotalArreglos() {
  let ganancias = 0
  for (let i = 0; i < autos.length; i++) {
    ganancias += autos[i].costo
  }
  return ganancias
}

console.log(gananciaTotalArreglos())