const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

// != diferente == igual a
// if (puntaje != 1000) {
//   console.log("Sí es diferente");
// }

if (puntaje !== "1000") {
  console.log("Sí es diferente!");
} else {
  console.log("No es diferente");
}

// == Operador que no es estricto
// === Operador estricto: tipo de dato y valor
