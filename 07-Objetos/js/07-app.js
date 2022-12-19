const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
  disponible: true,
};

// Se puede reasignar const cuando es un objeto
producto.disponible = false;
delete producto.precio;

console.log(producto);
