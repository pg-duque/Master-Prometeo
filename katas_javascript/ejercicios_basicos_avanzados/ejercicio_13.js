// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

// Puedes usar este array para probar tu función:

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(names, nombreBusqueda) {

    for (let i = 0; i < names.length; i++) {
        if (names[i] === nombreBusqueda) {

            console.log(`El nombre ${nombreBusqueda} está en la lista en la posición ${[i]}`)

            return {encontrado: true, posición: i};
        }
    }

    console.log(`El nombre ${nombreBusqueda} no aparece en la lista`)

    return {encontrado: false};

}
nameFinder(names, "Peggy");
nameFinder(names, "Paco");