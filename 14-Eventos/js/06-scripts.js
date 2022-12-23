// Event Bubbling

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const tituloDiv = document.querySelector(".titulo");

cardDiv.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click en card");
});

infoDiv.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click en info");
});

tituloDiv.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click en titulo");
});
