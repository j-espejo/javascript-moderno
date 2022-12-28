//Variables

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Contenedor para los resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//Eventos
document.addEventListener("DOMContentLoaded", function () {
  mostrarAutos(autos); // muestra los autos al cargar

  // llena las opciones de años
  llenarSelect();
});

//Event listener para los select de busqueda
marca.addEventListener("change", function (e) {
  datosBusqueda.marca = e.target.value;

  filtrarAuto();
});

year.addEventListener("change", function (e) {
  datosBusqueda.year = parseInt(e.target.value);

  filtrarAuto();
});

minimo.addEventListener("change", function (e) {
  datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener("change", function (e) {
  datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener("change", function (e) {
  datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener("change", function (e) {
  datosBusqueda.transmision = e.target.value;
});

color.addEventListener("change", function (e) {
  datosBusqueda.color = e.target.value;

  console.log(datosBusqueda);
});

// Funciones
function mostrarAutos(autos) {
  limpiarHTML(); //Elimina el html previo

  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;

    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    //insertar en el html
    resultado.appendChild(autoHTML);
  });
}

//Limpiar HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

// Genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}

//Funcion que filtra en base a la busqueda

function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

  // console.log(resultado);
  mostrarAutos(resultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;

  if (year) {
    return auto.year === year;
  }
  return auto;
}
