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

let resultado;
resultado = [...carrito, producto];

resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.log(resultado);
console.log(carrito);
