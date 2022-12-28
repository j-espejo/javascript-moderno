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

  const tweetOjb = {
    id: Date.now(),
    tweet,
  };

  // Añadir al arreglo de tweets
  tweets = [...tweets, tweetOjb];

  // Una vez agregado creamos el HTML
  crearHTML();

  // Reiniciar el formulario
  formulario.reset();
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

// Muestra un listado de los tweets
function crearHTML() {
  limpiarHTML();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Crear el HTML
      const li = document.createElement("li");

      // Añadir texto
      li.textContent = tweet.tweet;

      // insertar en el html
      listaTweets.appendChild(li);
    });
  }
}

// Limpiar HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
