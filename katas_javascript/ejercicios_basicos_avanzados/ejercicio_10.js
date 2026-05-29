// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

// Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numeros) {

    let resultadoSuma = 0;

    for (let i = 0; i < numeros.length; i++) {
        resultadoSuma += numeros[i];
    }

    let media = resultadoSuma / ((numeros.length));

    console.log(`La media es ${media}`);
    return media;
}

average(numbers);