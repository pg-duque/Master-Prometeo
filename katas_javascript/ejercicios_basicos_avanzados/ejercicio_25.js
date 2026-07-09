// Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

// Imprime ambos conteos por consola.

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Añade tu código de bucle aquí

//Creamos dos variables para ir contando las pelis de antes y después del 2000
let beforeTwoK = 0;
let afterTwoK = 0;

for ( let i = 0; i < movies.length; i++) {
    if (movies[i].releaseYear < 2000) {
        beforeTwoK++;
    } else {
        afterTwoK++;
    }
}

console.log(`Películas de antes del 2000: ${beforeTwoK}`)
console.log(`Películas de después del 2000: ${afterTwoK}`)