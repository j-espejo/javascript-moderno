const autenticado = true;
const puedePagar = false;

console.log(
  autenticado
    ? puedePagar
      ? "Si esta autenticado y puede pagar"
      : "Si autenticado, no puede pagar"
    : "No esta autenticado"
);
