// Las variables y archivos se crean de forma local
(function () {
  // variable que guarde el valor
  let DB;

  document.addEventListener("DOMContentLoaded", () => {
    crearDB();
  });

  // Crea la base de datos de indexDB
  function crearDB() {
    // abrimos una conexion
    const crearDB = window.indexedDB.open("crm", 1);

    crearDB.onerror = function () {
      console.log("Hubo un error");
    };

    crearDB.onsuccess = function () {
      DB = crearDB.result;
    };

    // se ejecuta una vez, registra las tablas
    crearDB.onupgradeneeded = function (e) {
      // el resultado lo que se ejecuta en la funcion (nuestra base de datos)
      const db = e.target.result;

      // objectStore con opciones extras
      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoincrement: true,
      });

      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("DB Lista y creada");
    };
  }
})();
