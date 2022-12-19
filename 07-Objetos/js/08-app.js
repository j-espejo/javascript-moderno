"use strict";

const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
  disponible: true,
};

// Podemos acceder Object Methods con use strict
// Evita objeto modificado
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

// producto isFrozen: No se puede modificar
console.log(Object.isFrozen(producto));
