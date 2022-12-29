// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

let tweets = [];
// Event Listeners
eventListeners();
function eventListeners() {
  // Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  document.addEventListener("DOMContentLoaded", function () {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    console.log(tweets);

    crearHTML();
  });
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
      // Agregar boton eliminar
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.textContent = "x";

      // Añadir la funcion de eliminar
      btnEliminar.onclick = function () {
        borrarTweet(tweet.id);
      };

      //Crear el HTML
      const li = document.createElement("li");

      // Añadir texto
      li.textContent = tweet.tweet;

      // Asignar btn eliminar
      li.appendChild(btnEliminar);

      // insertar en el html
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

// Agrega los Tweets actuales al LocalStorage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Limpiar HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}

// Elimina un tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearHTML();
}
