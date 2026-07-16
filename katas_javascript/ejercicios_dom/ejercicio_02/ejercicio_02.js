// 2.1 Insertamos un div vacío.
const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 2.2 Creamos un div, introducimos un párrafo y añadimos el div al body.
const divWithParagraph = document.createElement("div");
const paragraph = document.createElement("p");
divWithParagraph.appendChild(paragraph);
document.body.appendChild(divWithParagraph);

// 2.3 Creamos un div que contiene seis párrafos.
const divWithSixParagraphs = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const newParagraph = document.createElement("p");
  divWithSixParagraphs.appendChild(newParagraph);
}

document.body.appendChild(divWithSixParagraphs);

// 2.4 Creamos un párrafo con texto y lo añadimos al body.
const dynamicParagraph = document.createElement("p");
dynamicParagraph.textContent = "¡Soy dinámico!";
document.body.appendChild(dynamicParagraph);

// 2.5 Insertamos texto en el h2 indicado.
const heading = document.querySelector("h2.fn-insert-here");
heading.textContent = "Wubba Lubba dub dub";

// 2.6 Creamos una lista con los elementos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const appList = document.createElement("ul");

for (const app of apps) {
  const listItem = document.createElement("li");
  listItem.textContent = app;
  appList.appendChild(listItem);
}

document.body.appendChild(appList);

// 2.7 Eliminamos todos los elementos que tengan la clase fn-remove-me.
const elementsToRemove = document.querySelectorAll(".fn-remove-me");

for (const element of elementsToRemove) {
  element.remove();
}

// 2.8 Insertamos un párrafo entre los dos primeros div del HTML original.
const originalDivs = document.querySelectorAll("body > div");
const middleParagraph = document.createElement("p");
middleParagraph.textContent = "¡Voy en medio!";
document.body.insertBefore(middleParagraph, originalDivs[1]);

// 2.9 Insertamos un párrafo dentro de cada div con fn-insert-here.
const insertHereDivs = document.querySelectorAll("div.fn-insert-here");

for (const div of insertHereDivs) {
  const insideParagraph = document.createElement("p");
  insideParagraph.textContent = "¡Voy dentro!";
  div.appendChild(insideParagraph);
}
