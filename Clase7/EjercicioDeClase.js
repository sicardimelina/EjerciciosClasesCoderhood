
function randomError() {
    if(Math.random() < 0.5) {
        // Esto se ejecutará el 50% de las veces
        throw new Error("Error catastrófico")
    }
    return "Todo ok"
}

try {
    // ambiente seguro
    let resultado = randomError();
    console.log(resultado)
} catch (error) {
    console.log(error.message);
}