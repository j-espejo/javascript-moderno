const cliente = {
  nombre: "Jorge",
  saldo: 500,
};

console.log(cliente);
console.log(typeof cliente);

// Object constructor
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const jorge = new Cliente("Jorge", 500);
const nicole = new Cliente("Nicole", 700);

console.log(jorge);
console.log(nicole);
