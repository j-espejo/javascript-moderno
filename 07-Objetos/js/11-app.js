const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    // this, valores que existen en el mismo objeto
    console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
  },
};

const producto2 = {
  nombre: "Tablet",
  precio: 3000,
  disponible: true,
  mostrarInfo: function () {
    // this, valores que existen en el mismo objeto
    console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
  },
};

producto.mostrarInfo();
producto2.mostrarInfo();
