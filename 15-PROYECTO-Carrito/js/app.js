// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  // Cuando agregas un curso presionando "Agregar al Carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

//Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Lee el contenido del curso
function leerDatosCurso(curso) {
  //Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //agrega elementos al arreglo de carrito
  articulosCarrito = [...articulosCarrito, infoCurso];

  console.log(articulosCarrito);

  carritoHTML();
}

//muestra el carrito de compras en el HTML
function carritoHTML() {
  //limpiar HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    const rowTd = document.createElement("td");
    rowTd.textContent = curso.titulo;
    row.appendChild(rowTd);

    //Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

// ELimina el curso del tbody
function limpiarHTML() {
  //forma lenta
  // contenedorCarrito.innerHTML = "";

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
