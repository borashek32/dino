const dino =  document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startButton = document.getElementById("startButton");
const background = document.getElementById("background");
const again = document.getElementById("again");
const later = document.getElementById("later");
const notificationText = document.getElementById("notification1Text");
const notification = document.getElementById("notification");


startButton.addEventListener("click", () => {
  setTimeout(function() {
    if (cactus.classList.contains("cactusMov")) {
      cactus.classList.remove("cactusMov");
      startButton.textContent = "start";
    } else {
      cactus.classList.add("cactusMov");
      startButton.textContent = "stop";
    }
  })
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
const isAlive = setInterval(function() {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    cactus.classList.remove("cactusMov");
    startButton.textContent = "start";
    background.classList.remove("none");
  }
}, 10);
again.addEventListener("click", () => {
  background.classList.add("none");
});
later.addEventListener("click", () => {
  again.classList.add("disappear");
  later.classList.add("disappear");
  setTimeout(function () {
    again.classList.add("none");
    later.classList.add("none");
  }, 1000);
  setTimeout(function () {
    notification.classList.add("disappear");
    background.classList.add("none");
  }, 2000);
});