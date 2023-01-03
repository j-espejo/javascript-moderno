// class declaration
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const jespejo = new Cliente("jespejo", 400);
console.log(jespejo);

//class expresion
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const jorge = new Cliente2("jorge", 500);
console.log(jorge);
