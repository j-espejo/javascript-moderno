document.addEventListener("DOMContentLoaded", () => {
  crmDB();
});

function crmDB() {
  // Crear base de datos version 1.0
  let crmDB = window.indexedDB.open("crm", 1);

  // si hay un error
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear la DB");
  };

  // si se creo bien
  crmDB.onsuccess = function () {
    console.log("Base de datos creada!");
  };

  // configuracion de la base de datos
  crmDB.onupgradeneeded = function () {
    console.log("Este metodo solo se ejecuta una vez...");
  };
}
