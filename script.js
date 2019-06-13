"use strict";
(function() {
  // Konstruktor.
  function Scene(narration, choices, references, music) {
    this.narration = narration;
    this.choices = choices;
    this.references = references;
    this.music = music;
  };
  // System podmiany obiektów i wypisywania ich w odpowiedni sposób.
  const sceneSwap = function sceneSwap(stage){
    // Zmienne narracji i wyborów.
    const narr = document.getElementById("narration");
    const choi = document.getElementById("choices");
    // Wypisanie narracji.
    narr.innerHTML = stage.narration;
    // Tworzenie wyborów.
    choi.innerHTML = "";
    stage.choices.forEach(element => {
      const choice = document.createElement("div");
      choice.id = "choice-" + parseInt(stage.choices.indexOf(element) + 1);
      choice.innerHTML = element;
      // Przechodzenie między scenami dzięki wyborom.
      choice.addEventListener("click", function() {
        sceneSwap(stage.references[parseInt(stage.choices.indexOf(element))]);
      });
    choi.appendChild(choice);
    });
    // Tworzenie muzyki.
    const music = stage.music;
    const audio = document.getElementById("audio");
    const backgroundMusic = (music) => {
      if (music === "") {
        return;
      }
      audio.src = music;
      audio.volume = 0.025;
    }
    backgroundMusic(music);
  }
  // Sceny, w kolejności ODWROTNEJ z powodu czytania JS.
  // Mój syntax zapisywania nazw scen! (nazwaRozdzialu_numerSceny = ...)
  const poczatek_4 = new Scene("test", ["test"], [], "");
  const poczatek_3 = new Scene("W środku ciemności spędzasz dużo czasu, ale nie czujesz jego przeplywu. Zastanawiając się gdzie się znajdujesz powoli zauważasz że ból znika oraz odzyskujesz czucie w ciele", ["Postanawiam się poruszyć"], []);
  const poczatek_2 = new Scene("W trakcie wielkiemu bólu i męczarni jaką ci to sprawia z dala, oślepia cię szybko pojawiający się z daleka blask. Widzisz pewne twarze nad sobą oraz slyszysz galop koni, sylwetki zwrócily na ciebie uwage i podeszy bliżej cibie", ["Spróbuj się poruszyć"], [poczatek_4], "music/VillageConsort.mp3");
  const poczatek_1 = new Scene("Znajdujesz się w ciemnym miejscu, nie możesz się poruszyć, czujesz że całe twoje ciało przeszywa tępy ból lecz przed sobą widzisz zupełną ciemnośc i pustkę.", ["Próbuje się poruszyć", "Pozostań dalej w ciemności"], [poczatek_2, poczatek_3], "");
  // Rozpoczęcie gry.
  sceneSwap(poczatek_1);
}());
