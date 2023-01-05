// WeakSet

const weakset = new WeakSet();

// solo se puede pasar objetos y no son iterables

const cliente = {
  nombre: "Jespejo",
  saldo: 100,
};

const nombre = "Jespejo";

weakset.add(cliente);
// weakset.add(nombre);

// console.log(weakset.has(cliente));

// weakset.delete(cliente);

console.log(weakset);
