const model = document.getElementById("model");
const open = document.getElementById("open-btn");
const close = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

open.onclick = () => {
  model.classList.add("open");
  overlay.classList.add("open");
};

close.onclick = click;

overlay.onclick = click;

function click() {
  model.classList.remove("open");
  overlay.classList.remove("open");
}
