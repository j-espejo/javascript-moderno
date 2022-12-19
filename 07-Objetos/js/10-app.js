const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medidas: "1m",
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };

console.log(resultado);
console.log(resultado2);
