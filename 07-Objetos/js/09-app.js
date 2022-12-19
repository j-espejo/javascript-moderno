"use strict";

const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
  disponible: true,
};

// Sellar el Objeto: No se pueden Agregar ni Eliminar propiedades
// Pero si modificar las existentes
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "image.jpg";

console.log(Object.isSealed(producto));
