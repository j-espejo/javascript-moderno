//Ejecuta cuando el documento ha sido cargado
document.addEventListener("DOMContentLoaded", function () {
  //Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");

  // Asignar eventos
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta();
    } else {
      console.log("Si hay algo");
    }
  }

  function mostrarAlerta() {
    //Generar alerta HTML
    const error = document.createElement("p");
    error.textContent = "Hubo un error";

    console.log(error);
  }
});
