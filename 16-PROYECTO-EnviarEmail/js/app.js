//Ejecuta cuando el documento ha sido cargado
document.addEventListener("DOMContentLoaded", function () {
  //Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");

  const formulario = document.querySelector("#formulario");

  // Asignar eventos
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El Campo ${e.target.name} es obligatorio`,
        e.target.parentElement
      );
      return;
    }

    // Tiene que ser 'email' y fallar el email
    if (e.target.name === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es válido", e.target.parentElement);
      return;
    }

    limpiarAlerta(e.target.parentElement);
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    //Generar alerta HTML
    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // Inyectar el error al formulario
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    // Comprueba si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }
});
