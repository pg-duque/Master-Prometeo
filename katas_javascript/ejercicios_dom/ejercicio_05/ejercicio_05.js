const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist"
];

const albumList = document.createElement("ul");

for (const album of albums) {
  const listItem = document.createElement("li");
  listItem.textContent = album;
  albumList.appendChild(listItem);
}

const listContainer = document.querySelector("#album-list");
listContainer.appendChild(albumList);
