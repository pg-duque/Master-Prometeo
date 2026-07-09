// Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

// Imprime el nombre por consola.

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

// Añade tu código de bucle aquí

//Almacenamos el nombre de la peli en una variable, y el año de salida en otra, para ir comparándolo
//Le damos un valor de 3000 al año de salida para asegurarnos de que el primer resultado va a ser menor
let earliestDebut = 3000;
let earliestCartoon = '';

for (let i = 0; i < cartoons.length; i++) {
    if (cartoons[i].debut < earliestDebut) {
        earliestDebut = cartoons[i].debut;
        earliestCartoon = cartoons[i].name;
    }
}

console.log(`La serie de dibujos más antigua es ${earliestCartoon}`)

