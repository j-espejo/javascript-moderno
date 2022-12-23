const nav = document.querySelector(".navegacion");

// Registrar un evento
nav.addEventListener("mouseout", function () {
  console.log("saliendo en nav");

  nav.style.backgroundColor = "transparent";
});

nav.addEventListener("dblclick", function () {
  console.log("entrando en nav");
  nav.style.backgroundColor = "white";
});

// mousedown - similar al click
// click
// dblclick = doble click
// mouseup - cuando sueltas el mouse
