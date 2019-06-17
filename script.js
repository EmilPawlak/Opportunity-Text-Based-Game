"use strict";
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
  function Character(name, profession) {
    this.name = name;
    this.profession = profession;
  };
  // System podmiany obiektów i wypisywania ich w odpowiedni sposób.
  const sceneSwap = function sceneSwap(stage){
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
          if (background.style.backgroundImage === 'url("images/' + image + '")') {
            return;
          };
          background.style.animation = "none";
          background.clientTop;
          background.style.animation = null;
          // Header FadeOut po 1 oknie.
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
  const poczatek_4 = new Scene("test", ["test"], [], "", "");
  const poczatek_3 = new Scene("W środku ciemności spędzasz dużo czasu, ale nie czujesz jego przeplywu. Zastanawiając się gdzie się znajdujesz powoli zauważasz że ból znika oraz odzyskujesz czucie w ciele", ["Postanawiam się poruszyć"], [] , "", "");
  const poczatek_2 = new Scene("? Wonderful name, and what is your gender?", ["Boy", "Girl"], [poczatek_4], "", "VillageConsort.mp3");
  // Zdobycie imienia postaci.
  const askName = () => {
    const name = document.getElementById("name").value;
    // Sprawdzanie za niedozwolonymi charakterami.
    const number = /\d/;
    const special = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    // Iteracja i Easter Eggi (nie mogem dać kodu do zmiennej).
    debugger;
    if (name === "" ) {
      document.getElementById("message") = "Please, don't be shy.";
      return;
    } else if (number.test(name) === true) {
      document.getElementById("message").innerHTML = "Bip-Bop-Beep.. No numbers.";
      return;
    } else if (special.test(name) === true) {
      document.getElementById("message").innerHTML = "I beg you, no fency symbols..";
      return;
    // Easter Eggi.
    } else if (name === "Azaeir") {
      document.getElementById("message").innerHTML = "Eternal orphan.";
      return;
    } else if (name === "Serrit") {
      document.getElementById("message").innerHTML = "This name is already taken."
      return;
    } else if (name === "Caed") {
      document.getElementById("message").innerHTML = "Where?";
      return;
    } else if (name === "Radagast") {
      document.getElementById("message").innerHTML = "You can't use multiple names.";
      return;
    } else if (name === "Rada") {
      document.getElementById("message").innerHTML = "Congratulations, I hope you're proud of yourself. Smartass.";
      return;
    } else if (name === "Gast") {
      document.getElementById("message").innerHTML = "Yes, it works too, you really didn't have to check.";
      return;
    } else if (name === "Aiden") {
      document.getElementById("message").innerHTML = 'Error: "id" of text input "name" is empty.';
      return;
    }
    // Pozbyc się popupu.
    document.getElementById("popup").style.animation = "fadeOutHard 2s forwards";
    // Stworzyc postać.
    const character = new Character(name, "Adventurer");
    const poczatek_1 = new Scene(character.name + "? I really like this name, it's really nice", ["Thank you"], [poczatek_2, poczatek_3], "wygnuncy.png", "");
    // Rozpoczęcie gry.
    sceneSwap(poczatek_1);
  }
  const submit = document.getElementById("submit");
  submit.addEventListener("click", askName);
}());
