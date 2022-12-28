const nombre = localStorage.getItem("nombre");
console.log(nombre);

const productoJSON = localStorage.getItem("producto");
// un string a un objeto
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem("meses");
const mesesArr = JSON.parse(meses);
console.log(mesesArr);
