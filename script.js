"use strict";
// Konstruktor.
function Scene(chapter, name, narration, choices) {
  this.chapter = chapter;
  this.name = name;
  this.narration = narration;
  this.choices = choices;
};
// Początkowa scena.
let stage = new Scene(1, "Początek", "Znajdujesz się w ciemnym miejscu, czujesz że całe twoje ciało przeszywa tępy ból lecz przed sobą widzisz zupełną ciemnośc i pustkę.", [ "Próbuje się poruszyć", "Leże spokojnie"]);
// Zmienne narracji i wyborów.
const narr = document.getElementById("narration");
const choi = document.getElementById("choices");
// System podmiany obiektów i wypisywania ich w odpowiedni sposób.
const sceneSwap = function sceneSwap(){
  narr.innerHTML = stage.narration;
  choi.innerHTML = "";
  stage.choices.forEach(element => {
    const choice = document.createElement('div');
    choice.id = "choice-" + parseInt(stage.choices.indexOf(element) + 1);
    choice.innerHTML = element;
    choi.appendChild(choice);
  });
}
sceneSwap();
// Fabuła. PRACA
choi.addEventListener("click", function(event) {
  debugger;
  switch (event.target.id) {
    case "choice-1":
      stage = new Scene(2, "Przebudzenie", "Obudziłeś się..", ["Ale mnie wszystko boli.."]);
      sceneSwap();
      break;
    case "choice-2":
      stage = new Scene(3, "Przebudzenie2", "Obudziłeś się..2", ["Ale mnie wszystko boli..2"]);
      sceneSwap();
      break;
  }
}, false);
