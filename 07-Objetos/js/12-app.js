// Object Literal
const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
  disponible: true,
};

// Object Constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Monitor 20 Pulgadas", 5000);
console.log(producto2);

const producto3 = new Producto("TV", 1000);
console.log(producto3);
