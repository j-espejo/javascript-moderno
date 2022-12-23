window.addEventListener("scroll", function () {
  const premium = document.querySelector(".premium");
  //En que lugar se encuentra un elemento
  const ubicacion = premium.getBoundingClientRect();

  console.log(ubicacion.top);

  if (ubicacion.top < 784) {
    console.log("Elemento ya esta visible");
  }
});
