const producto = "Monitor 24 pulgadas ";
const precio = "30 USD";

console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));

//Otras formas de concatenar
console.log(producto + "con un precio de " + precio);

console.log("El producto " + producto + " tiene un precio de " + precio);

//Template String

console.log(`El producto ${producto} tiene un precio de ${precio}`);
