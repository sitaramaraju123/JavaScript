function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
// Person.prototype.get = function age(){
//     return this.age;
// }

// Person.prototype.set = function age(v){
//     this.age=v;
// }

Person.prototype.print = function () {
  console.log(
    this.firstName + " " + this.lastName + " is " + this.age + " years old."
  );
};

function student(firstName, lastName, id) {
  Person.apply(this, [firstName, lastName]);
  this.id = id;
}
//student.prototype = Object.create(Person.prototype);
student.prototype.print = function () {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is " +
      this.age +
      " years old and My id is " +
      this.id
  );
};
var stu = new student("Madhu", "Sudhan", 1);
var per = new Person("Madhu", "Sudhan");
stu.age = 24;
stu.print();
per.age = 26;
per.print();
