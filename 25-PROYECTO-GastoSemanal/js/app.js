// Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  formulario.addEventListener("submit", agregarGasto);
}

// Clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );

    this.restante = this.presupuesto - gastado;
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    // Extrayendo el valor
    const { presupuesto, restante } = cantidad;

    //Agregar al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    // crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    // Mensaje de error
    divMensaje.textContent = mensaje;

    // Insertar en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    // Quitar del HTML
    setTimeout(() => {
      divMensaje.remove();
    }, 2000);
  }

  agregarGastoListado(gastos) {
    this.limpiarHTML(); // Elimina HTML Previo

    // Iterar sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;

      // Crear un li
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center";
      // nuevoGasto.setAttribute("data-id", id);
      nuevoGasto.dataset.id = id;

      // Agregar el HTML del gasto
      nuevoGasto.innerHTML = ` ${nombre} <span class="badge badge-primary badge-pill">
      $${cantidad}</span>`;

      // boton para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = "Borrar &times";
      nuevoGasto.appendChild(btnBorrar);

      // Agregar al HTML
      gastoListado.appendChild(nuevoGasto);
    });
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }

  comprobarPresupuesto(presupuestoObj) {
    const { presupuesto, restante } = presupuestoObj;

    const restantediv = document.querySelector(".restante");

    console.log(presupuesto / 4, restante);

    // Comprobar 25%
    if (presupuesto / 4 > restante) {
      restantediv.classList.remove("alert-success", "alert-warning");
      restantediv.classList.add("alert-danger");
    } else if (presupuesto / 2 > restante) {
      restantediv.classList.remove("alert-success");
      restantediv.classList.add("alert-warning");
    }

    // Si el total es 0 o menor
    if (restante <= 0) {
      ui.imprimirAlerta("EL presupuesto se ha agotado", "error");

      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }
}

// Instanciar

const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cual es tu presupuesto?");

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  // Presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}

// Añade Gastos
function agregarGasto(e) {
  e.preventDefault();

  // Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  // Validar
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no válida", "error");
    return;
  }

  // Generar objeto con el gasto, object literal
  const gasto = { nombre, cantidad, id: Date.now() };

  // Añade nuevo gasto
  presupuesto.nuevoGasto(gasto);

  // Mensaje success
  ui.imprimirAlerta("Gasto agregado Correctamente");

  // Imprimir los gastos
  const { gastos, restante } = presupuesto;
  ui.agregarGastoListado(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);

  // Reinicia el formulario
  formulario.reset();
}
