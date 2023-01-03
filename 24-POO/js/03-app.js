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

// Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
  static bienvenida() {
    return `Bienvenido al cajero de empresas`;
  }
}

const jespejo = new Cliente("jespejo", 400);
const empresa = new Empresa("Empresa JE", 500, 99669989, "Articulos Oficina");
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
