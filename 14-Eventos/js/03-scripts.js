const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("input", function (e) {
  if (e.target.value === "") {
    console.log("fallo la validación");
  }
});
