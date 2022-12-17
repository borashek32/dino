const dino =  document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startButton = document.getElementById("startButton");


startButton.addEventListener("click", () => {
  if (cactus.classList.contains("game__cactusMov")) {
    cactus.classList.remove("game__cactusMov");
    startButton.textContent = "start";
  } else {
    cactus.classList.add("game__cactusMov");
    startButton.textContent = "stop";
  }
});

document.addEventListener('keyup', function(event){
  console.log('Key: ', event.key);
  console.log('keyCode: ', event.keyCode);
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38) {
    jump();
  }
  if (e.keyCode === 32) {
    e.preventDefault()
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
    alert("GAME OVER");
  }
}, 10);