// Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

// Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

// Puedes usar este array para probar tu función:

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(mixedElements) {

    let esNumero = 0;
    let esLetra = 0;
    let media = 0;

    for (let i = 0; i < mixedElements.length; i++) {

        // Usamos "typeof" para extraer el tipo de elemento que encontramos en el array
        if (typeof mixedElements[i] == 'number') {
            esNumero += mixedElements[i];
        } else if (typeof mixedElements[i] == 'string'){
            esLetra += mixedElements[i].length;
        }

    }

    media = (esNumero + esLetra) / mixedElements.length;
    console.log(`La suma de los números es ${esNumero}, la de la longitud de las palabras es ${esLetra} y la media es ${media}`);
    return media;    
}

averageWord(mixedElements);