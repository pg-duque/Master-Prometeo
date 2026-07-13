// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

// Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indexOne, indexTwo) {
    //Tenemos que crear una variable "intermedia" para hacer el swap
    //Almacenamos el primer índice en esta variable
    const savedElement = array[indexOne];
    //Intercambiamos el primer índice por el segundo
    array[indexOne] = array[indexTwo];
    //Recuperamos el índice guardado y lo intercambiamos
    array[indexTwo] = savedElement;

    return array;
}

console.log(swap(fantasticFour, 0, 3));