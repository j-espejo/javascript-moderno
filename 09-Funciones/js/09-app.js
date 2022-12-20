const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function () {
    console.log("pausando...");
  },
  borrar: function (id) {
    console.log(`Borrando canción.. ${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la PlayList: ${nombre}`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`Reproduciendo la PlayList: ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(30);

reproductor.crearPlaylist("Rock 80s");
reproductor.crearPlaylist("Heavy Metal");

reproductor.reproducirPlayList("Rock 80s");
