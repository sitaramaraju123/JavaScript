class Person {
  constructor(name) {
    this.name = name;
    this._age = 0;
  }

  get age() {
    return this._age;
  }

  set age(v) {
    this._age = v;
  }

  print() {
    console.log(this.name + " is " + this._age + " years old.");
  }
}
// Student <- Person <-   <- null
class Student extends Person {
  constructor(name, age, id) {
    super(name);
    this.age = age;
    this.id = id;
  }

  print() {
    console.log(
      "The student " +
        this.name +
        " is " +
        this._age +
        " years old and his/her id is " +
        this.id +
        "."
    );
  }
}

//
const will = new Student("Will", 25, 1);
// console.log(
//   " =-----> ",
//   Object.getPrototypeOf(
//     Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(will)))
//   )
// );
will.print();
