const producto = "Monitor 24 pulgadas";

// .replace para reemplazar un texto de una cadena
console.log(producto);
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));

// .slice cortar una parte cadena de texto
console.log(producto.slice(2, 1));

// Alternativa a .substring
console.log(producto.substring(2, 1));

const usuario = "Jespejo";

console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
