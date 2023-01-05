// Set lista de valores sin duplicados
const carrito = new Set();

carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");
carrito.add("Camisa");

console.log(carrito.delete("Disco #0"));

// console.log(carrito.has("Camisa"));

console.log(carrito.size);

carrito.forEach((producto, index, pertenece) => {
  //   console.log(producto);
  //   console.log(index);
  console.log(pertenece);
});

console.log(carrito);

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicado = new Set(numeros);
console.log(noDuplicado);
