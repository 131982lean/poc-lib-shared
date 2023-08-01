function suma(a, b) {
    const resultado = a + b;
    return resultado;
} 

function multiplicar(a, b) {
    let resultado = 0;
    for(let i = 0; i < b; i++) {
        resultado = suma(resultado, a);
    }
    return resultado;
} 

module.exports = {
    suma, multiplicar
}
