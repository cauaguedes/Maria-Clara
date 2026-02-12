let index = 0;
let typingStarted = false; // evita repetir a digitação

const slider = document.getElementById("slider");
const controls = document.getElementById("controls");
const slides = document.querySelectorAll(".slide");
const heartsContainer = document.getElementById("hearts");
const music = document.getElementById("music");

/* =========================
   INICIAR SITE
========================= */
function start() {
  document.querySelector(".start").style.display = "none";
  slider.classList.remove("hidden");
  controls.classList.remove("hidden");

  music.volume = 0.6;
  music.play();

  startHearts();
}

/* =========================
   CONTROLE SLIDES
========================= */
function updateSlide() {
  slider.style.transform = `translateX(-${index * 100}vw)`;

  // Se for o último slide, inicia a digitação
  if (index === slides.length - 1 && !typingStarted) {
    typingStarted = true;
    typeWriter();
  }
}

function next() {
  if (index < slides.length - 1) {
    index++;
    updateSlide();
  }
}

function prev() {
  if (index > 0) {
    index--;
    updateSlide();
  }
}

/* =========================
   CORAÇÕES SUBINDO
========================= */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

/* =========================
   EFEITO DIGITAÇÃO
========================= */
const text = "Com você eu descobri que o amor não é só sentir… é ter certeza. 💖 Eu escolheria você em todas as vidas.";
let charIndex = 0;

function typeWriter() {
  const element = document.getElementById("typewriter");

  if (!element) return;

  if (charIndex < text.length) {
    element.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50);
  }
}
