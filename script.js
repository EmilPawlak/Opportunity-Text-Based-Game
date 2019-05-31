"use strict";
// Construktor, najważniejsza część gry
function Scene(narration, choices) {
  this.narration = narration;
  this.choices = choices;
};
// Sceny, stworzone na bazie Construkltora, dzięki którym
//wyświetlane są wybrane dane.
const stage = new Scene("Witaj.", [ "Umm.. Witam?", "Cześć!", "c", "d", "e"]);

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
