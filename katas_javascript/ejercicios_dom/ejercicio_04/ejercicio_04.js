// 1.1 Mostramos en consola la información del evento click.
const button = document.querySelector("#btnToClick");

button.addEventListener("click", function (event) {
  console.log(event);
});

// 1.2 Mostramos el valor del input cuando recibe el foco.
const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", function (event) {
  console.log(event.target.value);
});

// 1.3 Mostramos el valor cada vez que cambia el contenido del input.
const valueInput = document.querySelector(".value");

valueInput.addEventListener("input", function (event) {
  console.log(event.target.value);
});
