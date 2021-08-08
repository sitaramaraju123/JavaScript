const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const Btn = document.getElementById("btn");

let getdata = JSON.parse(localStorage.getItem("User-data"));
Btn.onclick = e => {
  e.preventDefault();
  const uname = username.value;
  const pwd = password.value;
  if (uname !== "" && pwd !== "") {
    requiredAll([username, password]);
    for (let i = 0; i < getdata.length; i++) {
      if (uname === getdata[i].userName) {
        showSuccess(username);
        if (uname === getdata[i].userName && pwd === getdata[i].Password) {
          location.href = "homepage.html";
          break;
        } else {
          showError(password, "Wrong Password");
          break;
        }
      } else {
        showError(username, "User not Exist");
      }
    }
  } else {
    requiredAll([username, password]);
  }
};

function requiredAll(inputArray) {
  inputArray.forEach(element => {
    if (element.value === "") {
      showError(element, `${getFieldName(element)} is required`);
    } else {
      showSuccess(element);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, msg) {
  const items = input.parentElement;
  items.className = "form-content error";
  items.querySelector("small").innerText = msg;
}

function showSuccess(input) {
  const items = input.parentElement;
  items.className = "form-content success";
}
