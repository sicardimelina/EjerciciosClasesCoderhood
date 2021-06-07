/* 5. Pedidos
Tenemos un array con pedidos para nuestro negocio de comidas. 
Obtener un array con solo aquellos pedidos que incluyan algun condimento extra.

resultado esperando
[
    { id: "1", pedido: "hamburgesa", extras: ["mayonesa"] },
    { id: "1", pedido: "pancho", extras: ["ketchup"] }
]
*/
const pedidos = [
    { id: "1", pedido: "hamburgesa", extras: ["mayonesa"] },
    { id: "1", pedido: "pancho" },
    { id: "1", pedido: "pizza" },
    { id: "1", pedido: "pancho", extras: ["ketchup"] },
    { id: "1", pedido: "empanadas" },
]

let pedidosConExtra = pedidos.filter(
    function(pedido) {
        return (Object.keys(pedido).includes("extras"))
    }
)

console.log(pedidosConExtra)
