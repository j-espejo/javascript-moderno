const navegacion = document.querySelector(".navegacion");
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children);

// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

const card = document.querySelector(".card");

// card.children[1].children[1].textContent = "Nuevo heading desde traversing de DOM";

// card.children[0].src = "img/hacer3.jpg";
// console.log(card.children[0]);

// Traversing del Hijo al Padre, considera espacios
console.log(card.parentNode);
//verifica elementos validos en el HTML
console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard.previousElementSibling);
