let index = 0;
const slider = document.getElementById("slider");

function start() {
  document.querySelector(".start").style.display = "none";
  slider.classList.remove("hidden");
}

function updateSlide() {
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

function next() {
  if (index < 4) {
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
