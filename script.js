let index = 0;

const slider = document.getElementById("slider");
const controls = document.getElementById("controls");
const slides = document.querySelectorAll(".slide");
const heartsContainer = document.getElementById("hearts");

function start() {
  document.querySelector(".start").style.display = "none";
  slider.classList.remove("hidden");
  controls.classList.remove("hidden");

  const music = document.getElementById("music");
  music.volume = 0.6;
  music.play();

  startHearts();
}

function updateSlide() {
  slider.style.transform = `translateX(-${index * 100}vw)`;
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
