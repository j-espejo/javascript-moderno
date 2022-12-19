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
// Agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

//Agrega al Inicio
carrito.unshift(producto3);

console.log(carrito);
