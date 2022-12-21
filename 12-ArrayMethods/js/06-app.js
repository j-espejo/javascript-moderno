const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Comprueba q todos los resultados cumplan una condicion
const resultado = carrito.every((producto) => producto.precio < 500);
console.log(resultado);

// almenos uno cumpla la condicion
const resultado2 = carrito.some((producto) => producto.precio < 500);
console.log(resultado);
