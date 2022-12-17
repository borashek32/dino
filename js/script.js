const dino =  document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", (e) => {
  jump();
});

const jump = () => {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function() {
    dino.classList.remove("jump");
  }, 300);
};

const isAlive = setInterval()