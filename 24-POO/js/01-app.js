// class declaration
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de: $${this.saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

const jespejo = new Cliente("jespejo", 400);
console.log(jespejo.mostrarInformacion());
console.log(jespejo);
// Se llama desde la clase
console.log(Cliente.bienvenida());

//class expresion
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de: $${this.saldo}`;
  }
};

const jorge = new Cliente2("jorge", 500);
console.log(jorge.mostrarInformacion());
console.log(jorge);
