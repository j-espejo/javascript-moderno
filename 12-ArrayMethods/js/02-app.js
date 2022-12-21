const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Saber indice
meses.forEach((mes, i) => {
  if (mes === "Abril") {
    console.log(`Encontrado en el indice ${i}`);
  }
});

// Encontrar indice con .findIndex
const indice = meses.findIndex((mes) => mes === "Diciembre");
console.log(indice);

if (indice < 0) {
  console.log("No encontro el mes");
}

//Encontrar un indice en un arreglo de objetos...
const indice2 = carrito.findIndex((producto) => producto.precio === 100);
console.log(indice2);
