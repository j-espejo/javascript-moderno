const carrito = [];

// Definir un producto
const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 200,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

const producto4 = {
  nombre: "Celular 2",
  precio: 100,
};

// Agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

carrito.unshift(producto3);

// Eliminar último elemento de un arreglo
// carrito.pop();

// Elimina del inicio del arreglo
// carrito.shift();

console.table(carrito);

carrito.splice(3, 1);

console.table(carrito);
