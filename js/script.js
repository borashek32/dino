const dino =  document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startButton = document.getElementById("startButton");
const background = document.getElementById("background");
const again = document.getElementById("again");
const notification = document.getElementById("notification");
const one = document.getElementById("oneS");
const two = document.getElementById("twoS");
const three = document.getElementById("threeS");
const time = document.getElementById("time");


startButton.addEventListener("click", () => {
  background.classList.remove("none");
  one.classList.remove("none");
  time.classList.remove("none");
  setTimeout(function () {
    one.classList.add("none");
    two.classList.remove("none");
  }, 1000);
  setTimeout(function () {
    two.classList.add("none");
    three.classList.remove("none");
  }, 2000);
  setTimeout(function () {
    time.classList.add("none");
    time.classList.remove("time");
  }, 3000);
  setTimeout(function() {
    three.classList.add("none");
    background.classList.add("none");
    if (cactus.classList.contains("cactusMov")) {
      cactus.classList.remove("cactusMov");
      startButton.textContent = "start";
    } else {
      cactus.classList.add("cactusMov");
      startButton.textContent = "stop";
    }
  }, 3000);
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38) {
    jump();
  }
  if (e.keyCode === 32) {
    e.preventDefault();
  }
});
const jump = () => {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function() {
    dino.classList.remove("jump");
  }, 300);
};
setInterval(function () {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    cactus.classList.remove("cactusMov");
    startButton.textContent = "start";
    background.classList.remove("none");
    notification.classList.remove("none");
  }
}, 10);
again.addEventListener("click", () => {
  background.classList.add("disappear");
  notification.classList.add("disappear");
  setTimeout(function () {
    background.classList.remove("disappear");
    notification.classList.remove("disappear");
    background.classList.add("none");
    notification.classList.add("none");
  }, 1000);
});