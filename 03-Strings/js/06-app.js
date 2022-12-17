const producto = "Monitor 24 pulgadas";

//. repeat te va a permitir repetir una cadena de texto..
const texto = " en Promocion".repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!`);

// .split, dividir un string

const actividad = "Estoy aprendiendo javaScript Moderno";
console.log(actividad.split(" "));

const hobbies =
  "Leer, caminar, escuchar musica, escribir, aprender a programar";

console.log(hobbies.split(","));

const tweet = "Aprendiendo JavaScript #JavaScriptModerno";
console.log(tweet.split("#"));
