const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
  disponible: true,
};

// Destructuring
const { disponible } = producto;

console.log(disponible);

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, ...tercero] = numeros;

console.log(tercero);
