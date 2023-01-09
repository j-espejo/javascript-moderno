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
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    // Object store
    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    // Definir columnas
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("Columnas Creadas");
  };
}
