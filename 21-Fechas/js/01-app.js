const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth() + 1;
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.setFullYear("2010");

console.log(diaHoy);
