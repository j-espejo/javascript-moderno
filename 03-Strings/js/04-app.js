const producto = "         Monitor 24 pulgadas    ";

console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());
console.log(producto.trimEnd());

//chaining
console.log(producto.trimStart().trimEnd());

// eliminar principio y final
console.log(producto.trim());
