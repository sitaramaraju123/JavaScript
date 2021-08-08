const uname = document.getElementById("uname");
const age = document.getElementById("age");
const empId = document.getElementById("empID");
const role = document.getElementById("role");
const addbtn = document.getElementById("btn");

if (localStorage.getItem("Items") == null) {
  localStorage.setItem("Items", "[]");
}
var addItems = JSON.parse(localStorage.getItem("Items"));
displayData(addItems);

addbtn.onclick = () => {
  let obj = {
    uname: uname.value,
    age: age.value,
    empId: empId.value,
    role: role.value
  };

  const emp = addItems.find(item => item.empId === empId.value);
  console.log(emp);

  if (emp === undefined) {
    addItems.push(obj);
  } else {
    alert("User Exit");
  }
  localStorage.setItem("Items", JSON.stringify(addItems));
  displayData(addItems);
  uname.value = "";
  age.value = "";
  empId.value = "";
  role.value = "";
};

console.log(addItems);

var entry = document.getElementById("fullName");
entry.onkeyup = () => {
  var value = document.getElementById("fullName").value;
  var result = [];
  for (let i = 0; i < addItems.length; i++) {
    value = value.toLowerCase();
    var name = addItems[i].uname.toLowerCase();
    if (name.includes(value)) {
      result.push(addItems[i]);
    }
  }
  return displayData(result);
};

function displayData(data) {
  var table = document.getElementById("body");
  table.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    var row = `<tr>
                      <td>${data[i].uname}</td>
                      <td>${data[i].age}</td>
                      <td>${data[i].empId}</td>
                      <td>${data[i].role}</td>
                 </tr>`;
    table.innerHTML += row;
  }
}
