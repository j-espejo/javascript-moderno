const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarformulario);

function validarformulario(e) {
  e.preventDefault();

  console.log("Buscando..");

  console.log(e.target);
}
