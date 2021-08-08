function Person(name){
    this.name=name;
    this.age=0;                           //constructer
}                                       
Person.prototype.get = function age(){
    return  this.age;
}
Person.prototype.set = function age(v){
    this.age=v;
}
Person.prototype.print = function (){
    console.log(this.name+" is "+ this.age+" years old.");
}
var will = new Person("Will");

console.log("Will =-----------> "+will.age);
will.age = 45;
console.log("Will =-----------> "+will.age);
will.print();
