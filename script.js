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
  const begenning_ = new Scene("", [], [], "", "");
  const begenning_8 = new Scene("", [], [], "", "");
  const begenning_7 = new Scene("", [], [], "", "");
  const begenning_6 = new Scene("As I told you before, I don't have a phisical form, so I can't stay in one place for a long time. Im drifting through space and time endlessly as a result of my actions, but at this moment I'm here with you, and you seem to be intrigued by my appearance. Look, lost one. I miss my world, my home, and everyone I left there. But I really would like to show you how living there is, because if I can't go there.. I can at least give you a taste of it. And don't worry, it's permament. So, after our unusual meeting, Would you like to see my world?", ["Yes", "No"], [begenning_8, begenning_9], "", "");
  const begenning_5 = new Scene("", [], [], "", "");
  const begenning_4 = new Scene("Ahh, bravery, that's a good trait, but It can lead to a lot of pain, but Im drifting out of topic. As you might guessed, Im not from here, not from your world. In matter of fact I dont exist anymore, at least not in physical definition of existance. But when I was alive, I lived in a.. Wonderful.. wild, living world.. As Im thinking now about it, It was really one of a kind.", ["Why are you telling me this?", "Just get to the point already."], [begenning_6, begenning_5], "", "");
  const begenning_3 = new Scene("Ahh, curiosity, that's a good trait, knowladge can open every door.. Or at least most of them.. But Im drifting out of topic. As you might guessed, Im not from here, not from your world. In matter of fact I dont exist anymore, at least not in physical definition of existance. But when I was alive, I lived in a.. Wonderful.. wild, living world.. As Im thinking now about it, It was really one of a kind.", ["Why are you telling me this?", "Im sorry to hear.. Can you tell me more about your world?", "Just get to the point already."], [begenning_7, begenning_6, begenning_5] , "", "");
  const begenning_2 = new Scene("I understand you can be a bit confused right now, my identity doesn't matter, and don't be afraid of me lost one, I do not want to harm you.", ["What is happening?", "Im not scared of you"], [begenning_3, begenning_4], "", "");
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
    const begenning_1 = new Scene(character.name + "? I really like this name, it's really nice. Anyway, Im glad to meet you nonetheless", ["Umm.. Thank you?", "Who are you?"], [begenning_2, begenning_2], "wygnuncy.png", "");
    // Rozpoczęcie gry.
    sceneSwap(begenning_1);
  }
  const submit = document.getElementById("submit");
  submit.addEventListener("click", askName);
}());
