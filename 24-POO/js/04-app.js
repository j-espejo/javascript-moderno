class Cliente {
  #nombre;

  setNombre(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }
}

const jorge = new Cliente();
jorge.setNombre("Jorge");

console.log(jorge.getNombre());

// console.log(jorge.#nombre);
