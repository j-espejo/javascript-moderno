// Crea una propiedad unica
const sym = Symbol("1");
const sym2 = Symbol("1");

if (sym === sym2) {
  console.log("Son iguales!!");
} else {
  console.log("Son Diferentes");
}

// console.log(Symbol() === Symbol());
const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agrega nombre y apellido como llaves del objeto
persona[nombre] = "Jorge";
persona[apellido] = "Espejo";
persona.tipoCliente = "Normal";
persona.saldo = 400;

console.log(persona);
console.log(persona[nombre]);

// Las propiedades que utilizan un Symbol no son iterables
for (let i in persona) {
  console.log(i);
}

// Definir una descripcion del symbol
const nombreCliente = Symbol("Nombre del Cliente");
const cliente = {};

cliente[nombreCliente] = "Pedro";

console.log(cliente);
console.log(nombreCliente);
