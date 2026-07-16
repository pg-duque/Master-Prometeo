// 1.1 Seleccionamos el botón con la clase showme.
console.log(document.querySelector(".showme"));

// 1.2 Seleccionamos el h1 con el id pillado.
console.log(document.querySelector("#pillado"));

// 1.3 Seleccionamos todos los párrafos.
console.log(document.querySelectorAll("p"));

// 1.4 Seleccionamos todos los elementos con la clase pokemon.
console.log(document.querySelectorAll(".pokemon"));

// 1.5 Seleccionamos todos los elementos con el atributo indicado.
const characters = document.querySelectorAll('[data-function="testMe"]');
console.log(characters);

// 1.6 Mostramos el tercer personaje. Los índices de una lista empiezan en 0.
console.log(characters[2]);
