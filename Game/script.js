const num = document.querySelector(".number");
const againbtn = document.querySelector(".again");
const checkbtn = document.querySelector(".check");
const msg = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let decrement = 15;
let high = 0;

// num.innerText = secretNumber;

checkbtn.addEventListener("click", () => {
  let input = Number(document.querySelector(".guess").value);

  if (!input) {
    msg.innerText = "No Number...";
  } else if (input === secretNumber) {
    msg.innerText = "Congrats you Won...";
    num.innerText = secretNumber;
    checkbtn.setAttribute("disabled", "disabled");
    document.body.style.backgroundColor = "#60b347";
    if (decrement >= high) {
      high = score.innerText;
      highscore.innerText = high;
    }
  } else if (
    input < secretNumber
      ? (msg.innerText = "Wrong Guess....")
      : (msg.innerText = "Wrong Guess....")
  ) {
    if (decrement > 0) {
      score.innerText = --decrement;
    } else if (decrement === 0) {
      msg.innerText = "You lose the Game..";
      num.innerText = secretNumber;
      document.body.style.backgroundColor = "rgb(238, 75, 75)";
    }
  }
});

let input = document.querySelector(".guess");
againbtn.addEventListener("click", () => {
  input.value = "";
  decrement = 15;
  checkbtn.removeAttribute("disabled");
  document.body.style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score.innerText = decrement;
  num.innerText = "?";
  msg.innerText = "Start guessing...";
});
