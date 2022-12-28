// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

let tweets = [];
// Event Listeners
eventListeners();
function eventListeners() {
  formulario.addEventListener("submit", agregarTweet);
}

// Funciones
function agregarTweet(e) {
  e.preventDefault();

  // Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  // validacion
  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vacio");
    return; // evita que se ejecuten mas lineas de codigo
  }

  console.log("Agregando tweet");
}

// Mostrar mensaje error
function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  // Insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  // Elimina la alerta despues de 1.5s
  setTimeout(() => {
    mensajeError.remove();
  }, 1500);
}
