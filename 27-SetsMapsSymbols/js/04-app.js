// mantener series de datos privados, objetos: llave y valor
const producto = {
  idProducto: 10,
};

const weakmap = new WeakMap();

weakmap.set(producto, "Monitor");

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));

//No se puede conocer la cantidad .size
// console.log(weakmap.size);

console.log(weakmap);

// No son iterables
