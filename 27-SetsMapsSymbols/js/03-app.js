// Listas ordenas en llave y valor, cualquier tipo de dato

const cliente = new Map();

cliente.set("nombre", "Karen");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);

console.log(cliente.size);

console.log(cliente.has("nombre"));

console.log(cliente.get("tipo"));

cliente.delete("saldo");

console.log(cliente.has("saldo"));
console.log(cliente.get("saldo"));

cliente.clear();
console.log(cliente);

const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);

paciente.set("dr", "Dr Asignado");
paciente.set("nombre", "Jorge");

console.log(paciente);

// Son Iterables

paciente.forEach((datos, index) => console.log(index, datos));
