// Dado un un array de compras, obtener todas las compras realizadas por "pepe" 
// y devolver un arreglo con los nombres de los productos que compró

const compras = [
    { usuario: "pepe", producto: "mochila", costo: 1800 },
    { usuario: "maria", producto: "lapicera", costo: 50 },
    { usuario: "juan", producto: "cuaderno", costo: 200 },
    { usuario: "pepe", producto: "carpeta", costo: 300 },
    { usuario: "laura", producto: "escuadra", costo: 150 },
]

function cdpp(compras) {
    let comprasDePepe = []
    for (let i = 0; i < compras.length; i++) {
     if (compras[i].usuario === "pepe") {
        comprasDePepe.push(compras[i].producto)
        }
    }
    return comprasDePepe
}

//console.log(cdpp(compras))

let comprasPepe = compras.filter(
    function(compra) {
        return compra.usuario == "pepe"
    }
).map(function(element){
    return element.producto
}
)

console.log(comprasPepe)


