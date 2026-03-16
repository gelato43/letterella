const introScreen = document.getElementById("introScreen");
const letterScreen = document.getElementById("letterScreen");
const galleryScreen = document.getElementById("galleryScreen");

const openLetterBtn = document.getElementById("openLetterBtn");
const backBtn = document.getElementById("backBtn");
const replayBtn = document.getElementById("replayBtn");
const nextBtn = document.getElementById("nextBtn");
const galleryBackBtn = document.getElementById("galleryBackBtn");

const letterText = document.getElementById("letterText");

const TEXT_SPEED = 50;

const fullLetter = `Sarò sincero sono 4gg che penso a come iniziare questa lettera ma non
so nemmeno da dove cominciare ma nel caso sappi che mi ci sono applicato per un po' ... grazie per la lettera
comunque veramente creativo oltre che non immagino stare li a programmare
pensando al gay che sono ma vab sono gusti personali :D . So che ti
avevo detto che ti avrei scritto comunque, ma alla fine ho preferito rispettarti
ed evitare di continuare a tenerti in una situazione in cui tu stessa
non vuoi stare, non so se fosse la scelta giusta perché per quanto riguarda me è
stato damaging e basta tanto continuo a pensarti sempre e comunque n i
kept missin yo ass quindi non so se ha molto senso ig, ma vab ti ho scritto per
ringraziarti della lettera e di esserci stata per me, francamente
anche di essere venuta al compleanno di Roberto, quel giorno mi sono sentito malissimo
e continuavo a dire a tutti che stavo male e non mi sentivo apposto prima di fare il disastro
senza poter spiegare la verità giustamente il che è stato difficile, ed anche il motivo 
di come mi sono combinato, ma era deserved dai mi ha aiutato a pensare
e FORSE da un lato ero anche contento ci fossi :P (mi fa ridere usare ste emoji).
Comunque no non ti odio e non mi infastidisci odio essere messo in
determinate posizioni dagli altri senza chiedermelo non odio te.
Vabbé a parte tutto spero tu ti stia divertendo e che stia andando
tutto meglio since i left.
Mario`;

let typingTimer = null;

function clearTyping() {
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = null;
  }
}

function typeLetter(text, speed = TEXT_SPEED) {
  clearTyping();
  letterText.textContent = "";

  let index = 0;

  function step() {
    letterText.textContent += text[index];
    index++;

    if (index < text.length) {
      typingTimer = setTimeout(step, speed);
    }
  }

  if (text.length > 0) {
    step();
  }
}

function showIntro() {
  clearTyping();
  letterScreen.classList.add("hidden");
  galleryScreen.classList.add("hidden");
  introScreen.classList.remove("hidden");
}

function showLetter() {
  galleryScreen.classList.add("hidden");
  introScreen.classList.add("hidden");
  letterScreen.classList.remove("hidden");
  typeLetter(fullLetter, TEXT_SPEED);
}

function showGallery() {
  clearTyping();
  introScreen.classList.add("hidden");
  letterScreen.classList.add("hidden");
  galleryScreen.classList.remove("hidden");
}

openLetterBtn.addEventListener("click", showLetter);
backBtn.addEventListener("click", showIntro);
replayBtn.addEventListener("click", () => typeLetter(fullLetter, TEXT_SPEED));
nextBtn.addEventListener("click", showGallery);
galleryBackBtn.addEventListener("click", showLetter);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !introScreen.classList.contains("hidden")) {
    showLetter();
  }

  if (event.key === "Escape") {
    if (!galleryScreen.classList.contains("hidden")) {
      showLetter();
    } else if (!letterScreen.classList.contains("hidden")) {
      showIntro();
    }
  }
});