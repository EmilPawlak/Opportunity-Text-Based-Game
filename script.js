"use strict";
// Construktor, najważniejsza część gry
function Scene(chapter, name, narration, choices) {
  this.chapter = chapter;
  this.name = name;
  this.narration = narration;
  this.choices = choices;
};
// Sceny, stworzone na bazie Construkltora, dzięki którym
//wyświetlane są wybrane dane.
var stage = new Scene(1, "Początek", "Znajdujesz się w ciemnym miejscu, czujesz że całe twoje ciało przeszywa tępy ból lecz przed sobą widzisz zupełną ciemnośc i pustkę.", [ "Próbuje się poruszyć", "Leże spokojnie"]);
// Narracja
const narr = document.getElementById("narration");
narr.innerHTML = stage.narration;

// Wybory
const choi = document.getElementById("choices");
// Ciekawy przypadek, nie działa tu choi.innerHTML (undefined), więc musiałem
//stworzyć zmienną która byłaby swojego rodzaju handlerem danych.
const choiceHandler = stage.choices.forEach(element => {
  const choice = document.createElement('div');
  choice.id = "choice-" + parseInt(stage.choices.indexOf(element) + 1);
  choice.innerHTML = element;
  choi.appendChild(choice);
});
// *clicking noises*
debugger;
choi.addEventListener("click", function(event) {
  switch (event.target.id) {
    case "choice-1":
      stage = new Scene(12, "Przebudzenie", "Obudziłeś się..", ["Ale mnie wszystko boli.."]);
      break;
    case "choice-2":
      stage = new Scene(12, "Przebudzenie2", "Obudziłeś się..2", ["Ale mnie wszystko boli..2"]);
      break;
  }
}, false);
