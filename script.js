"use strict";
debugger;
(function() {
  // Konstruktor Poziomów.
  function Scene(narration, choices, references, image,  music) {
    this.narration = narration;
    this.choices = choices;
    this.references = references;
    this.image = image;
    this.music = music;
  };
  // Konstruktor Postaci.
  function Character(name, profesion, special) {
    this.name = name;
    this.profesion = profesion;
    this.special = special;
  }
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
        // Animacje.
        function animation() {
          // Zawartości.
          narr.style.animation = "none";
          narr.clientTop; // Layout reflow by zrestartować animacje CSS.
          narr.style.animation = null;

          choi.style.animation = "none";
          choi.clientTop;
          choi.style.animation = null;
          // Tla.
          debugger;
          if (background.style.backgroundImage === 'url("images/' + image + '")') {
            return;
          };
          background.style.animation = "none";
          background.clientTop;
          background.style.animation = null;
          // Header
          const h1 = document.getElementsByTagName("h1")[0];
          h1.style.animation = "fadeOut 2s forwards";
        }
        animation();
      });
    choi.appendChild(choice);
    });
    // Dodawanie tla.
    const image = stage.image;
    const background = document.getElementById("background");
    background.style.backgroundImage = "url(images/" + image + ")";
    // Tworzenie muzyki.
    const music = stage.music;
    const audio = document.getElementById("audio");
    const backgroundMusic = (music) => {
      if (music === "") {
        return;
      }
      audio.src = "music/" + music;
      audio.volume = 0.025;
    }
    backgroundMusic(music);
  }
  // Sceny, w kolejności ODWROTNEJ z powodu czytania JS.
  // Mój syntax zapisywania nazw scen! (nazwaRozdzialu_numerSceny = ... (Narracja, Odpowiedzi, Odnośniki, Zdjęcia, Muzyka))
  const poczatek_4 = new Scene("test", ["test"], [], "azaeir.jpg", "");
  const poczatek_3 = new Scene("W środku ciemności spędzasz dużo czasu, ale nie czujesz jego przeplywu. Zastanawiając się gdzie się znajdujesz powoli zauważasz że ból znika oraz odzyskujesz czucie w ciele", ["Postanawiam się poruszyć"], [] , "", "");
  const poczatek_2 = new Scene("W trakcie wielkiemu bólu i męczarni jaką ci to sprawia z dala, oślepia cię szybko pojawiający się z daleka blask. Widzisz pewne twarze nad sobą oraz slyszysz galop koni, sylwetki zwrócily na ciebie uwage i podeszy bliżej cibie", ["Spróbuj się poruszyć"], [poczatek_4], "azaeir.jpg", "VillageConsort.mp3");
  const poczatek_1 = new Scene("Znajdujesz się w ciemnym miejscu, nie możesz się poruszyć, czujesz że całe twoje ciało przeszywa tępy ból lecz przed sobą widzisz zupełną ciemnośc i pustkę.", ["Próbuje się poruszyć", "Pozostań dalej w ciemności"], [poczatek_2, poczatek_3], "wygnuncy.png", "");
  // Rozpoczęcie gry.
  sceneSwap(poczatek_1);
}());
