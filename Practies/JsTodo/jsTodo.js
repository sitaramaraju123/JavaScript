const body = document.createElement("body");
const div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("id", "container");
const head = document.createElement("h1");
head.innerText = "Todo List";
head.setAttribute("id", "head");
div.appendChild(head);
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add your text");
input.setAttribute("id", "input");
div.appendChild(input);
const addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.setAttribute("id", "btn");
div.appendChild(addBtn);
const ulTag = document.createElement("ul");
ulTag.setAttribute("id", "list");
ulTag.style.listStyle = "none";
div.appendChild(ulTag);
const clear = document.createElement("button");
clear.innerText = "Clear All";
clear.setAttribute("id", "clear");
div.appendChild(clear);

const text = document.getElementById("input");
const btn = document.getElementById("btn");
const item = document.getElementById("list");
const clearAll = document.getElementById("clear");
// const addItems = [];

// text.addEventListener("keydown", function (e) {
//   if (e.keyCode === 13) {
//     let items = text.value;
//     addItems.push(items);
//     show();
//   }
// });
show();
text.onkeyup = e => {
  let getLocalStorage = localStorage.getItem("Js Todo");
  if (getLocalStorage === null) {
    addItems = [];
  } else {
    addItems = JSON.parse(getLocalStorage);
  }
  if (text.value === "") {
    alert("please enter a text to Add");
  } else if (e.keyCode === 13) {
    let items = text.value;
    addItems.push(items);
    localStorage.setItem("Js Todo", JSON.stringify(addItems));
    show();
  }
};

show();

btn.onclick = () => {
  let getLocalStorage = localStorage.getItem("Js Todo");
  if (getLocalStorage === null) {
    addItems = [];
  } else {
    addItems = JSON.parse(getLocalStorage);
  }
  if (text.value === "") {
    alert("please enter a text to Add");
  } else {
    let items = text.value;
    addItems.push(items);
    localStorage.setItem("Js Todo", JSON.stringify(addItems));
    show();
  }
};

function show() {
  let getLocalStorage = localStorage.getItem("Js Todo");
  if (getLocalStorage === null) {
    addItems = [];
  } else {
    addItems = JSON.parse(getLocalStorage);
  }
  let newList = "";
  addItems.forEach((element, index) => {
    newList += `<li> ${element} <i class="fas fa-trash"; id="delete"; onclick = "remove(${index})";></i></li>`;
  });
  item.innerHTML = newList;
  input.value = "";
}

function remove(index) {
  let getLocalStorage = localStorage.getItem("Js Todo");
  addItems = JSON.parse(getLocalStorage);
  addItems.splice(index, 1);
  localStorage.setItem("Js Todo", JSON.stringify(addItems));
  show();
}

clearAll.onclick = () => {
  let getLocalStorage = localStorage.getItem("Js Todo");
  if (getLocalStorage === null) {
    addItems = [];
  } else {
    addItems = JSON.parse(getLocalStorage);
  }
  addItems.length = 0;
  localStorage.setItem("Js Todo", JSON.stringify(addItems));
  show();
};
