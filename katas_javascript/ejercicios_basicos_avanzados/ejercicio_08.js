// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(lista) {

  let palabraMasLarga = lista[0];

  for (let i = 1; i < lista.length; i++) {

    if (lista[i].length > palabraMasLarga.length) {
      palabraMasLarga = lista[i];
    }
  }

  console.log(`La palabra más larga es ${palabraMasLarga}`);
  return palabraMasLarga;
}

findLongestWord(avengers);