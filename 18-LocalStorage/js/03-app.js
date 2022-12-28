localStorage.removeItem("nombre");

// Actualizar registro
const mesesArr = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArr);
mesesArr.push("Nuevo Mes");
console.log(mesesArr);
localStorage.setItem("meses", JSON.stringify(mesesArr));

localStorage.clear();
