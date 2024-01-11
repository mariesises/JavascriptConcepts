const array = [2, 3, 4, 5, 6, 2, 1]

function maxAdjacentSum(array2) {
    const maxSum = -Infinity
    const { lenght } = array2

    for (let i = 0; i < lenght - 1; i++) {
        const sum = array2[i] + array2[i + 1]
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum
}
console.log(maxAdjacentSum(array))

function sumaMasGrande(array) {

    if (array.length < 2) {
        // El array debe tener al menos dos elementos para calcular la suma entre números adyacentes.
        console.error("El array debe tener al menos dos elementos.");
        return;
    }

    let sumaMaxima = array[0] + array[1];

    for (let i = 1; i < array.length - 1; i++) {
        let sumaActual = array[i] + array[i + 1];
        if (sumaActual > sumaMaxima) {
            sumaMaxima = sumaActual;
        }
    }
    return sumaMaxima;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7];
const resultado = sumaMasGrande(numeros);
console.log("La suma más grande entre dos números adyacentes es:", resultado);