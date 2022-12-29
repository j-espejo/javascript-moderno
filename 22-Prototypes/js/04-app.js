// Object constructor
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// function accede a las propiedades del objeto
Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }

  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo: ${
    this.saldo
  }, Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};

// Heredar de cliente a Persona
function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}

// Antes de crear la instancia

// Heredar funciones
Persona.prototype = Object.create(Cliente.prototype);
// Heredar constructor
Persona.prototype.constructor = Cliente;

//  Instanciar
const jorge = new Persona("Jorge", 5000, 123456789);
console.log(jorge);

console.log(jorge.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
  return `El telefono de esta persona es: ${this.telefono}`;
};

console.log(jorge.mostrarTelefono());
