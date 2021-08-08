function Parent(name){
    this.name=name;
    this._age= 0;
}
 Parent.prototype.get = function age(){
     return this._age;
}

 Parent.prototype.set = function age(v){
     this._age=v;
 }

Parent.prototype.print = function(){
    console.log(this.name+" is "+ this._age+" years old.")
}

function Child(name, age, id){
    Parent.call(this, name);
    Parent.prototype.set(this, age);
    //this.age = age;
    this.id = id;
}

Child.prototype = Object.create(Parent.prototype)

Child.prototype.print = function (){
    console.log('The Student '+this.name+' is '+this._age+' years old and his/her id is '+ this.id)
}

//Child.prototype = Object.assign({}, Parent.prototype, Child.prototype)
var child = new Child("Will smith", 45, 1);
child.print();

