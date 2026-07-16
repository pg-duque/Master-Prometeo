// 1.1 Creamos una lista de países y la añadimos al body.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const countryList = document.createElement("ul");

for (const country of countries) {
  const listItem = document.createElement("li");
  listItem.textContent = country;
  countryList.appendChild(listItem);
}

document.body.appendChild(countryList);

// 1.2 Eliminamos el elemento con la clase fn-remove-me.
const elementToRemove = document.querySelector(".fn-remove-me");
elementToRemove.remove();

// 1.3 Creamos una lista de coches dentro del div indicado.
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const carList = document.createElement("ul");

for (const car of cars) {
  const listItem = document.createElement("li");
  listItem.textContent = car;
  carList.appendChild(listItem);
}

const printHere = document.querySelector('[data-function="printHere"]');
printHere.appendChild(carList);

// 1.4 Creamos una tarjeta por cada objeto del array.
const countryCards = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" }
];

const cardsContainer = document.createElement("section");
cardsContainer.classList.add("cards-container");

for (const country of countryCards) {
  const card = document.createElement("div");
  card.classList.add("country-card");

  const title = document.createElement("h4");
  title.textContent = country.title;

  const image = document.createElement("img");
  image.src = country.imgUrl;
  image.alt = country.title;

  // 1.6 Cada tarjeta recibe un botón que elimina esa misma tarjeta.
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar esta tarjeta";
  deleteButton.addEventListener("click", function () {
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(deleteButton);
  cardsContainer.appendChild(card);
}

document.body.appendChild(cardsContainer);

// 1.5 Creamos un botón que elimina la última tarjeta que quede en la serie.
const deleteLastButton = document.createElement("button");
deleteLastButton.textContent = "Eliminar la última tarjeta";

deleteLastButton.addEventListener("click", function () {
  const cards = document.querySelectorAll(".country-card");

  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});

document.body.appendChild(deleteLastButton);
