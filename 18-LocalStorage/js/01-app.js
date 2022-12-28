// Solo se pueden almacenar string
localStorage.setItem("nombre", 1);

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 3000,
};

const productoString = JSON.stringify(producto);
localStorage.setItem("producto", productoString);

const meses = ["Enero", "Febrero", "Marzo"];
localStorage.setItem("meses", JSON.stringify(meses));
