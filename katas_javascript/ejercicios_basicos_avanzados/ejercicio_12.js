// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

// Pista: puedes generar un nuevo array y devolverlo.

// Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(duplicates) {
    
    const arraySinDuplicados = [];

    for (let i = 0; i < duplicates.length; i++) {

        // Si nuestro nuevo array no incluye ya la palabra del array anterior, la añadimos
        if (!arraySinDuplicados.includes(duplicates[i])) {
            
            arraySinDuplicados.push(duplicates[i]);
        }
    }

    return arraySinDuplicados;

}

console.log(removeDuplicates(duplicates));