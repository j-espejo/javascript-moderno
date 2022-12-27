//Variables
const resultado = document.querySelector("#resultado");

//Eventos
document.addEventListener("DOMContentLoaded", function () {
  mostrarAutos();
});

// Funciones
function mostrarAutos() {
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
