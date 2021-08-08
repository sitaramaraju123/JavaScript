const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const cpwd = document.getElementById("cpassword");

// form.onsubmit = e => {
//   e.preventDefault();
//   console.log(username.value);
// };

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else if (input.value === "") {
    showError(input, "Email is required");
  } else {
    showError(input, "Email is not Valid");
  }
}

function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, pwd, cpwd]);
  checkLength(username, 3, 15);
  checkLength(pwd, 6, 25);
  checkEmail(email);
  checkPassword(pwd, cpwd);

  // if (username.value === "") {
  //   showError(username, "Username is required");
  // } else {
  //   showSuccess(username);
  // }
  // if (email.value === "") {
  //   showError(email, "Email is required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Email is not Valid");
  // } else {
  //   showSuccess(email);
  // }
  // if (pwd.value === "") {
  //   showError(pwd, "Password is required");
  // } else {
  //   showSuccess(pwd);
  // }
  // if (cpwd.value === "") {
  //   showError(cpwd, "Conform password is required");
  // } else {
  //   showSuccess(cpwd);
  // }
});
