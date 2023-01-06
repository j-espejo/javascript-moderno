import nuevaFuncion, {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
  Cliente,
} from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostarInformacion());

// Usamos Empresa
const empresa = new Empresa("Desarrollo web", 100, "Aprendizaje online");
console.log(empresa);
console.log(empresa.mostarInformacion());
