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
  // Zdobycie imienia postaci.
  const game = () => {
    // Sprawdzanie imienia.
    const name = document.getElementById("name").value;
    // Sprawdzanie za niedozwolonymi charakterami.
    const number = /\d/;
    const special = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    // Iteracja i Easter Eggi (nie mogem dać kodu do zmiennej).
    if (name === "" ) {
      document.getElementById("message") = "Please, don't be shy.";
      return;
    } else if (number.test(name) === true) {
      document.getElementById("message").innerHTML = "Bip-Bop-Beep.. No numbers.";
      return;
    } else if (special.test(name) === true) {
      document.getElementById("message").innerHTML = "I beg you, no fency symbols..";
      return;
      debugger;
    } else if (name[0] !== name[0].toUpperCase()) {
      document.getElementById("message").innerHTML = "Names ususlly start with capitalized letter, doesn't they?";
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
    // Historia.
    function story(){
      // Sceny, w kolejności ODWROTNEJ z powodu czytania JS.
      // Mój syntax zapisywania nazw scen! (nazwaRozdzialu_numerSceny = ... (Narracja, Odpowiedzi, Odnośniki, Zdjęcia, Muzyka))
      const birth_ = new Scene("", [], [], "", "");
      //birth
      const birth_15 = new Scene("You tried to say something, you spat on yourself, but I guess it's a small price for making your mom laugh. After this emberessing moment you hear 'Ori? Is everything alright?' comming from a doorway. Source of this voice came closer, 'Ah, I see we're having an another 'I'll wake my mother in the middle of the night' party over here.'", ["Giggle", "Be angry", "..."], [], "", "");
      const birth_14 = new Scene("You moved around in her arms, you felt that youre slipping out of her hands but luckly her reflex protected you from a dangerous fall 'Wow! You need to slow down'" + character.name + ", You could hurt yourself. After this scary moment you hear 'Ori? Is everything alright?' comming from a doorway. Source of this voice came closer, 'Ah, I see we're having an another 'I'll wake my mother in the middle of the night' party over here.'", ["Giggle", "Be angry", "..."], [], "", "");
      const birth_13 = new Scene("You smiled back to your mom, she simed a bit surprised but she followed it up with a bright true smile and a quiet giggle. After this sweet moment you hear 'Ori? Is everything alright?' comming from a doorway. Source of this voice came closer, 'Ah, I see we're having an another 'I'll wake my mother in the middle of the night' party over here.'", ["Giggle", "Be angry", "..."], [], "", "");
      // PRACA.
      const birth_12 = new Scene('Sadenlly the door opens. a woman comes quaietly jogging to you. "Is everything alright ' + character.name + '?" Said woman talking you on her arms, calmly and slowly waving you left and right "Mommy couldnt sleep and she had a bad feeling like you had this problem too." she said in a really happy voice.', ["Talk", "Move", "Smile"], [birth_15, birth_14, birth_13], "", "");
      const birth_11 = new Scene("As you're looking around you see that you're in a cradle and a small room with little bright lamp shining warm flames onto you. In this pirticullar moment you realized that you're in fact...", ["Oh god", "..."], [birth_12, birth_12], "", "");
      const birth_10 = new Scene('Footsteps reached to the door, a woman comes quaietly walking to you. "Is everything alright ' + character.name + '?" Said woman talking you on her arms, calmly and slowly waving you left and right "I couldnt sleep, and I had a feeling.." she tilted your had so you both could look at each other " That you were awake too" She said with a smirk on her face.', ["Talk", "Move", "Smile"], [birth_15, birth_14, birth_13], "", "");
      const birth_9 = new Scene('Sadenlly the door opens. a woman comes quaietly jogging to you. "Is everything alright ' + character.name + '?" Said woman talking you on her arms, calmly and slowly waving you left and right "Mommy couldnt sleep and she had a bad feeling like you had this problem too." she said in a really happy voice.', ["Talk", "Move", "Smile"], [birth_15, birth_14, birth_13], "", "");
      const birth_8 = new Scene("You made a noise which sounded completely different then you intendednt it to sound. But surly after few another attempts you hear footsteps comming your way.", ["Continue making noise", "Look around"], [birth_10 ,birth_11], "", "");
      const birth_7 = new Scene("As you're looking around you see that you're in a cradle and a small room with little bright lamp shining warm flames onto you. In this pirticullar moment you realized that you're in fact...", ["Oh god", "..."], [birth_9, birth_9], "", "");
      const birth_6 = new Scene("You decided to stand up and go and look around when you realized that you failed on a first step of this plan.", ["What is going on?", "Call for someone", "Look around"], [birth_9, birth_8, birth_7], "", "");
      const birth_5 = new Scene("You made a noise which sounded completely different then you intendednt it to sound. But surly after few another attempts you hear footsteps comming your way.", ["Continue making noise", "Look around"], [birth_10 ,birth_7], "", "");
      const birth_4 = new Scene("As you're looking around you see that you're in a cradle and a small room with little bright lamp shining warm flames onto you. In this pirticullar moment you realized that you're in fact...", ["Oh god", "..."], [birth_9, birth_9], "", "");
      const birth_3 = new Scene("You made a sound, which didn't sounded like you've planned, it sounded like you cried, but some may think it was clouser to screaming. You're laying on your back, you see a wooden celling above you.", ["Go investigate the rest of the room", "Call for someone", "Look around"], [birth_6, birth_5, birth_4], "main_bg.png", "");
      const birth_2 = new Scene("", ["Halo?", "..."], [birth_3, birth_3], "black_bg.png", "");
      const birth_1 = new Scene("", ["..."], [birth_2], "black_bg.png", "");
      //beginning
      const beginning_13 = new Scene("You felt like someone simled far away from you, he seemed.. Happy.", ["..."], [birth_1], "black_bg.png", "");
      const beginning_12 = new Scene("", ["..."], [beginning_13], "black_bg.png", "");
      const beginning_11 = new Scene("", ["..."], [], "black_bg.png", "");
      const beginning_10 = new Scene(" ", ["I want to go there!", "Nevermind"], [beginning_12, beginning_11], "black_bg.png", "");
      const beginning_9 = new Scene("", ["..."], [], "black_bg.png", "");
      const beginning_8 = new Scene("Really? Im.. Im very happy, you made me.. feel, thank you. I don't know what awaits on you there, but I believe you'll enjoy a stay there. Nonetheless, Im not sure if I'll be here when you'll be back, but it's not time for a farewell. Now, brace yourself, for I gave you, an Opportunity, and you took it.", ["..."], [birth_1], "black_bg.png", "");
      const beginning_7 = new Scene("I respect you and your decision. *sigh* Well, I believe my time here is about to end anyway, thank you for spending a bit of your life with me " + character.name + ". I'll go now.. have a nice, day.", ["No, wait!", "..."], [beginning_10, beginning_9], "black_bg.png", "");
      const beginning_6 = new Scene("As I told you before, I don't have a phisical form, so I can't stay in one place for a long time. Im drifting through space and time endlessly as a result of my actions, but at this moment I'm here with you, and you seem to be intrigued by my appearance. Look, lost one. I miss my world, my home, and everyone I left there. But I really would like to show you how living there is, because if I can't go there.. I can at least give you a taste of it. And don't worry, it's permament. So, after our unusual meeting, Would you like to see my world?", ["Yes", "No"], [beginning_8, beginning_7], "black_bg.png", "");
      const beginning_5 = new Scene("Look, lost one. My time has come a long time ago, but maybe before I'll vanish, would you like to see the world I lived in?", ["Yes", "No"], [beginning_8, beginning_7], "black_bg.png", "");
      const beginning_4 = new Scene("Ahh, curiosity, that's a good trait, knowladge can open every door.. Or at least most of them.. But Im drifting out of topic. As you might guessed, Im not from here, not from your world. In matter of fact I dont exist anymore, at least not in physical definition of existance. But when I was alive, I lived in a.. Wonderful.. wild, living world.. As Im thinking now about it, It was really one of a kind.", ["Why are you telling me this?", "Just get to the point already."], [beginning_6, beginning_5] , "black_bg.png", "");
      const beginning_3 = new Scene("Ahh, bravery, that's a good trait, but It can lead to a lot of pain and suffer, but Im drifting out of topic. As you might guessed, Im not from here, not from your world. In matter of fact I dont exist anymore, at least not in physical definition of existance. But when I was alive, I lived in a.. Wonderful.. wild, living world.. As Im thinking now about it, It was really one of a kind.", ["Why are you telling me this?", "Just get to the point already."], [beginning_6, beginning_5], "black_bg.png", "");
      const beginning_2 = new Scene("I understand you can be a bit confused right now, my identity doesn't matter, and don't be afraid of me lost one, I do not want to harm you.", ["What is happening?", "Im not scared of you"], [beginning_4, beginning_3], "black_bg.png", "");
      const beginning_1 = new Scene(character.name + "? I really like this name, it's really nice. Anyway, Im glad to meet you nonetheless", ["Umm.. Thank you?", "Who are you?"], [beginning_2, beginning_2], "black_bg.png", "");
      // Rozpoczęcie gry.
      sceneSwap(beginning_1);
    }
    story()
  }
  const submit = document.getElementById("submit");
  submit.addEventListener("click", game);
}());
