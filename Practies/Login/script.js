const form = document.getElementById("form");
const uname = document.getElementById("username");
const pwd = document.getElementById("password");

const arr = [
  { username: "Madhu", password: "1234" },
  { username: "Sitaramaraju", password: "2143" },
  { username: "Hari", password: "123456" },
  { username: "Ashfaaq", password: "123" },
  { username: "Krishna sai", password: "3214" }
];

form.addEventListener("submit", e => {
  e.preventDefault();
  for (let i = 0; i < arr.length; i++) {
    if (uname.value !== "" || pwd.value !== "") {
      showSuccess(uname), showSuccess(pwd);
      if (uname.value !== "") {
        if (pwd.value !== "") {
          if (uname.value === arr[i].username) {
            showSuccess(uname);
            if (
              uname.value === arr[i].username &&
              pwd.value === arr[i].password
            ) {
              // location.href("webpage/web.html");
              alert(`Welcome ${uname.value}`);
              break;
            } else {
              showError(pwd, "Wrong Password");
              break;
            }
            break;
          } else {
            showError(uname, "Wrong Username");
          }
        } else {
          showError(pwd, "Password is required");
        }
      } else {
        showError(uname, "Username is required");
      }
    } else {
      showError(uname, "Username is required");
      showError(pwd, "Password is required");
    }
  }
});

function showError(input, msg) {
  const formContainer = input.parentElement;
  formContainer.className = "form-container error";
  formContainer.querySelector("small").innerText = msg;
}

function showSuccess(input) {
  const formContainer = input.parentElement;
  formContainer.className = "form-container success";
}
