const automovil = {
  modelo: "Camaro",
  year: 2021,
  motor: "2.1",
};

for (let propiedad in automovil) {
  console.log(`${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(llave, valor);
}
