let quien = ["mi perro", "mi abuela", "mi hija", "mi esposa", "mi heladera"];
let accion = ["rompió", "se comió", "quemó", "desintegró", "atrapó"];
let que = ["mis deberes", "mi teléfono", "mi auto", "a mis visitas"];
let cuando = [
  "antes de ir a clases",
  "cuando estaba por ir al trabajo",
  "cuando me iba a dormir",
  "cuando me estaba duchando",
  "mientras jugaba futbol",
  "al momento de la cena"
];

function generateExcuse() {
  let quien2 = Math.floor(Math.random() * quien.length);
  let accion2 = Math.floor(Math.random() * accion.length);
  let que2 = Math.floor(Math.random() * que.length);
  let cuando2 = Math.floor(Math.random() * cuando.length);
  let excusa = `${quien[quien2]} ${accion[accion2]} ${que[que2]} ${cuando[cuando2]}.`;
  document.getElementById("excuse").innerText = excusa;
}

document
  .getElementById("generateBtn")
  .addEventListener("click", function(event) {
    event.preventDefault();
    generateExcuse();
  });
