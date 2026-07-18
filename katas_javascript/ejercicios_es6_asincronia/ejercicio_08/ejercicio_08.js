// Seleccionamos el desplegable y la imagen del HTML
const characterList = document.querySelector('#character-list');
const characterImage = document.querySelector('.character-image');

// Función asíncrona para obtener los personajes
const getCharacters = async () => {
    // Petición a la API con la URL que apunta a los personajes
    const response = await fetch(
        'https://thronesapi.com/api/v2/Characters'
    );
    // Pasamos la respuesta a JS
    const characters = await response.json();
    // Recorremos la lista
    for (const character of characters) {
        // Creamos una opción para el desplegable
        const option = document.createElement('option');
        // Añadimos el nombre y la imagen
        option.textContent = character.fullName;
        option.value = character.imageUrl;
        // Le añadimos la opción al desplegable
        characterList.appendChild(option);
    }
    // Enseñamos la imagen del primer personaje [0]
    characterImage.src = characters[0].imageUrl;
};
// Cambiamos la imagen al seleccionar otro 
characterList.addEventListener('change', () => {
    characterImage.src = characterList.value;
});

getCharacters();