const model = document.getElementById("model");
const open = document.getElementById("open-btn");
const overlay = document.getElementById("overlay");

const form = document.getElementById("form");
const uname = document.getElementById("username");
const pwd = document.getElementById("password");

open.onclick = () => {
  model.classList.add("open");
  overlay.classList.add("open");
};
overlay.onclick = () => {
  model.classList.remove("open");
  overlay.classList.remove("open");
};

form.addEventListener("submit", e => {
  e.preventDefault();
  if (uname.value !== "" || pwd.value !== "") {
    showSuccess(uname), showSuccess(pwd);
    if (uname.value !== "") {
      if (pwd.value !== "") {
        if (uname.value === "ram" && pwd.value !== "123") {
          showError(pwd, "Wrong password");
        } else if (uname.value !== "ram" && pwd.value === "123") {
          showError(uname, "Wrong Username");
        } else if (uname.value === "ram" && pwd.value === "123") {
          alert("Login Success Welcome " + uname.value);
        } else {
          showError(uname, "User not Exist");
        }
      } else {
        showError(pwd, "Password is requied");
      }
    } else {
      showError(uname, "Username is requied");
    }
  } else {
    showError(uname, "Username is requied");
    showError(pwd, "Password is requied");
  }
});

function showError(input, msg) {
  const formContent = input.parentElement;
  formContent.className = "form-content error";
  formContent.querySelector("small").innerText = msg;
}
function showSuccess(input) {
  const formContent = input.parentElement;
  formContent.className = "form-content";
}
