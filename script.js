"use strict";
debugger;
(function() {
  // Konstruktor.
  function Scene(narration, choices, references) {
    this.narration = narration;
    this.choices = choices;
    this.references = references;
  };
  // System podmiany obiektów i wypisywania ich w odpowiedni sposób.
  const sceneSwap = function sceneSwap(stage){
    // Zmienne narracji i wyborów.
    const narr = document.getElementById("narration");
    const choi = document.getElementById("choices");
    narr.innerHTML = stage.narration;
    choi.innerHTML = "";
    stage.choices.forEach(element => {
      const choice = document.createElement('div');
      choice.id = "choice-" + parseInt(stage.choices.indexOf(element) + 1);
      choice.innerHTML = element;
      choice.addEventListener("click", function() {
        sceneSwap(stage.references[parseInt(stage.choices.indexOf(element))]);
      });
      choi.appendChild(choice);
    });
  }
  // Sceny, w kolejności ODWROTNEJ z powodu czytania JS.
  // Mój syntax zapisywania nazw scen! (nazwaRozdzialu_numerSceny = ...)
  const poczatek_3 = new Scene("W środku ciemności spędzasz dużo czasu, ale nie czujesz jego przeplywu. Zastanawiając się gdzie się znajdujesz powoli zauważasz że ból znika oraz odzyskujesz czucie w ciele", ["Postanawiam się poruszyć"], []);
  const poczatek_2 = new Scene("W trakcie wielkiemu bólu i męczarni jaką ci to sprawia z dala, oślepia cię szybko pojawiający się z daleka blask. Widzisz pewne twarze nad sobą oraz slyszysz galop koni, sylwetki zwrócily na ciebie uwage i podeszy bliżej cibie", ["Spróbuj się poruszyć"], []);
  const poczatek_1 = new Scene("Znajdujesz się w ciemnym miejscu, nie możesz się poruszyć, czujesz że całe twoje ciało przeszywa tępy ból lecz przed sobą widzisz zupełną ciemnośc i pustkę.", ["Próbuje się poruszyć", "Pozostań dalej w ciemności"], [poczatek_2, poczatek_3]);
  // Rozpoczęcie gry.
  sceneSwap(poczatek_1);
}());
