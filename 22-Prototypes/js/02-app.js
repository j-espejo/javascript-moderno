// Object constructor
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const jorge = new Cliente("Jorge", 500);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

console.log(formatearCliente(jorge));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const Jltd = new Empresa("Jespejo Ltd", 6000, "Informatica");
console.log(formatearEmpresa(Jltd));
