// Seleccionamos la imagen del HTML
const randomImage = document.querySelector('.random-image');

// Función asíncrona para obtener un Pokemon aleatorio
const getRandomPokemon = async () => {
    // Generamos un número aleatorio entre 1 y 151
    const randomNumber = Math.floor(Math.random() * 151) + 1;

    // Petición concatenando el número aleatorio en la URL
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );

    // Convertimos la respuesta a JS
    const pokemon = await response.json();

    // Obtenemos el artwork oficial del Pokemon
    randomImage.src =
        pokemon.sprites.other['official-artwork'].front_default;

    // Añadimos el nombre como texto alternativo por si peta la imagen
    randomImage.alt = pokemon.name;
};

getRandomPokemon();