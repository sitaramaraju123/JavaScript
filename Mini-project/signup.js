const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const Btn = document.getElementById("btn");

if (localStorage.getItem("User-data") == null) {
  localStorage.setItem("User-data", "[]");
}
let data = JSON.parse(localStorage.getItem("User-data"));

Btn.onclick = e => {
  e.preventDefault();
  const fname = firstname.value;
  const lname = lastname.value;
  const uname = username.value;
  const pwd = password.value;
  const cpwd = cpassword.value;
  let obj = {
    firstName: fname,
    lastName: lname,
    userName: uname,
    Password: pwd,
    Cpassword: cpwd
  };

  const userdata = data.find(input => input.userName === uname);

  if ((fname, lname, uname, pwd, cpwd === "")) {
    requiredAll([firstname, lastname, username, password, cpassword]);
  } else if (fname.length < 3 || lname.length < 3 || uname.length < 3) {
    checkLength([firstname, lastname, username]);
  } else if (fname.length > 15 || lname.length > 15 || uname.length > 15) {
    checkLength([firstname, lastname, username]);
  } else if (pwd.length < 6 || cpwd.length < 6) {
    checkLength([firstname, lastname, username]);
    checkPwd([password, cpassword]);
  } else if (pwd !== cpwd) {
    checkPassword(password, cpassword);
  } else if (userdata === undefined) {
    requiredAll([firstname, lastname, username, password, cpassword]);
    data.push(obj);
    alert("Registration is successfull");
  } else {
    showError(username, "User Already Exist");
  }

  localStorage.setItem("User-data", JSON.stringify(data));
  firstname.value = "";
  lastname.value = "";
  username.value = "";
  password.value = "";
  cpassword.value = "";
};

console.log(data);

function requiredAll(inputArray) {
  inputArray.forEach(input => {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(inputArray) {
  inputArray.forEach(n => {
    if (n.value.length < 3) {
      showError(n, `${getFieldName(n)} want to be more than 3 letters`);
    } else if (n.value.length > 15) {
      showError(n, `${getFieldName(n)} want to be less than 15 letters`);
    } else {
      showSuccess(n);
    }
  });
}

function checkPwd(input) {
  input.forEach(n => {
    if (n.value.length < 6) {
      showError(n, `${getFieldName(n)} want to be atleast 6 letters`);
    } else {
      showSuccess(n);
    }
  });
}

function checkPassword(pwd, cpwd) {
  if (pwd.value === cpwd.value) {
    showSuccess(cpwd);
  } else {
    showError(cpwd, "Conform Password is Not match");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, msg) {
  const formError = input.parentElement;
  formError.className = "form-content error";
  formError.querySelector("small").innerText = msg;
}

function showSuccess(input) {
  const formSuccess = input.parentElement;
  formSuccess.className = "form-content success";
}
