// let result = checkSpeed(70);
// console.log(result);
// function checkSpeed(speed){
// const speedLimit = 70;
// const km = 5;
//     if(speed < speedLimit + km){
//     return 'ok'
//     }
//     let points = Math.floor((speed - speedLimit)/km);
//     if(points >= 12)
//     return 'License Suspended'
//     else
//     return ('points:- '+ points);
// }

// var a = 20;
// function v() {
//   console.log(a);
//   var a = 30;
// }
// v();

//SpeedLimit Checking Code

//===================================================================

// Even or Odd

// showNumber(10);
// function showNumber(limit){
//     for(let i=0; i<=limit; i++){
//        const msg = (i % 2 === 0) ? 'EVEN' : 'ODD'
//        console.log(i, msg);
//     }
// }

//===================================================================

//Truthy values

// const array = [0, undefined, null, false, '', NaN, 1,2,3]

// countTruthy(array);

// function countTruthy(array){
//     let count = 0;
//     for(let value of array)
//     if(value)
//     count++;
//     console.log(count);
// }

//===================================================================

// function name (a){
//     function name2 (){
//         return "Hello";
//     }
//     console.log(name2());
//     return a;
// }

// console.log(name(10));

//===================================================================

// const movies = {
//     title: 'a',
//     releaseYear: 2020,
//     rating: 4.5,
//     director: 'b'
// };

// showProp(movies)

// function showProp(obj){
// for (let key in obj)
//     if(typeof obj[key] === 'string')
//     console.log(key, obj[key]);
// }
//=====================================================================

// console.log(sum(10));

// function sum(limit){
//     let total=0;
//     for(let i=1; i<=limit; i++){
//         if(i%3===0 || i%5===0)
//         total += i;
//     }
// return total;
// }

//======================================================================

// const marks = [80, 80, 50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks){
//    const average = calculateAvg(marks);

//    if(average < 60) return 'F';
//    if(average < 70) return 'D';
//    if(average < 80) return 'C';
//    if(average < 90) return 'B';
//    return 'A';
// }

// function calculateAvg(array){
//     let sum = 0;
//     for(let value of array)
//     sum += value;
//     return sum/array.length;
// }

//======================================================================

//---------->showStar<------------

// showStar(5);

// function showStar(rows){
//     for(let row = 1; row <= rows; row++){
//         let pattern = '';
//         for(let i=0; i< row; i++)
//         pattern += '*';
//         console.log(pattern);
//     }
// }

//======================================================================

//--------->primeNumber<-------------

//primeNumber(20)
// function primeNumber(limit){
//     for(let i=2; i<=limit; i++){
//         let isPrime = true;
//         for(let j=2; j<i; j++){
//             if(i%j === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime) console.log(i);
//     }
//}

// function primeNumber(limit){
//     for(let i=2; i<=limit; i++)
//     if(isPrime(i)) console.log(i);
// }

// function isPrime(num){
//     for(let i=2; i<num; i++)
//     if(num % i === 0)
//     return false;

//     return true;
// }

//=================================================================

// //-------> Object<---------

// const person = {
//     fname: 'Jevaan',
//     age: 25,
//     job: 'Developer',
//     friend: ['Ashfaaq', 'Suresh', 'Ganesh'],
//     obj:{
//         food: 'Mutton',
//         game: 'Cricket'
//     },
//     draw(){
//         console.log("Hello") // method
//     },
//     cal_age : function(){return 2021 - this.age}
// }
// //console.log(person.cal_age());

// var person1  = JSON.parse(JSON.stringify(person));

// person1.obj.food = "Chicken"

// console.log(person);
// console.log(person1);
//==================================================================

//----------->Factory Function<----------------

// function createCircle(radius){
//     return {
//     radius,
//     draw(){
//         console.log('draw')
//     }
// };
// }

// const circle = createCircle(1);
// const circle1= createCircle(2)
// console.log(circle)
// console.log(circle1)

//=====================================================================

//---------->Constructor Function<--------------

// function Circle(radius){
//     this.radius = radius;
//     this.draw = () => console.log('draw');
// }

// const circle = new Circle(1);
// console.log(circle);

//======================================================================

//----------->Dynamic Nature of Object<-------------

// const circle = {
//     radius: 1
// };

// //Adding new Properties and methods
// circle.color = "Red";
// circle.work = () => console.log("Software Developer");

// //Removing properties and methods
// delete circle.color;

// console.log(circle);

//======================================================================

// const obj = {
//     name: 'Satish',
//     age: 18,
//     fullName: function(city){
//         console.log(this.name+" "+this.age, city)
//     }
// }

// const obj2 = {
//     name: 'Rajesh',
//     age: 18,
//     fullName: function(){
//         console.log(this.name+" "+this.age)
//     }
// }

// const obj1 = obj.fullName;
// obj1.call(obj, 'Delhi');

//========================================================================

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw')
//     }
// }

// Circle.call({}, 1);

// const circle = new Circle(1);
// console.log(circle);

//Creating Object using function

// const Circle1 = new Function('radius',`
// this.radius = radius;
//     this.draw = function(){
//         console.log('draw')
//     }
// `);

// const circle = new Circle1(1);
// console.log(circle);

//==============================================================================

//---------->Primitives are copied by values<---------------

// let x = 20;

// function incress(num){
//     num++;

//     return num;
// }

// console.log(x)   //output will be x = 20
// console.log(incress(x)); //output will be 21;

//==============================================================================

//------------>Objects are copied by Reference<---------------

// let x = {value: 20};

// function incress(num){
//     num.value++
//     console.log(num);
// }

// incress(x);  //output will be {value: 21}
// console.log(x) //output will be {value: 21}

//============================================================================================

//------------>Enumerating Properties of an Object<------------------

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw')
//     }
// };

// for(let key in circle)
// console.log(key, circle[key]); // for-in loop is used to iterate over all the properties and methods of an object(circle)

// // for(let key of circle)
// // console.log(key)         //This may cause an Error like this =  circle is not iterable, Because for-of is user for Array

// // To work this object in for-of we have to get the properties and methods of the Main Object

// for(let key of Object.keys(circle))
// console.log(key, circle[key])      // keys method returns (string[] -> (String Array)) in the Object and Also we can use entries

// for(let key of Object.entries(circle))
// console.log(key)                 // Enties returns an array of key/values of the enumerable properties of an object

//============================================================================================================================================

//--------->Cloning of Object<-------------

// const circle = {
//         radius: 1,
//         inner:{
//             x:1
//         },
//         draw() {
//             console.log('draw')
//         }
//     };

//     //old model using for-in loop

//     const another = {}
//     for(let key in circle)
//     another[key] = circle[key]
//     another.color = 'green';
//     console.log(circle)
//     console.log(another);

//New model using 1.Assign, 2.Spread operator, 3.JSON

// Note:- By using old model, Assign and spread we can't able to modify Inner Object in the circle.
// if we try to modify then it will update all copies.
// To Solve this problem we can use JSON

//1.Assign:-
// const another1 = Object.assign({
//     color: 'red'
// },circle)
// console.log(another1);

// //2.Spread Operator:-

// const another2 = {...circle}
// another2.color = 'white';
// console.log(another2)

// //3.JSON:- (it is used to copy the object and also we can modify inner object also)

// const another3 = JSON.parse(JSON.stringify(circle))
// another3.color = 'Black';
// another3.inner.x = 2;
// console.log(another3);

//======================================================================================================================

//--------->Object Exercise<----------

// const address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// };

// showAddress(address);

// function showAddress(address){
//     for(let key in address)
//     console.log(key, address[key]);
// }

// let address = createAddress('a', 'b', 'c')

// console.log(address);

// function createAddress(street, city, zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// let add = new Address('a','b','c')
// let add1 = new Address('a','b','c')
// let add2 = add;

// function Address(street, city, zipCode){
//         this.street = street;
//         this.city = city;
//         this.zipCode = zipCode
// }

// console.log(areEqual(add, add1));

// function areEqual(add, add1){
//     return add.street === add1.street && add.city == add1.city
//     && add.zipCode == add1.zipCode
// }

// console.log(areSame(add, add1));
// console.log(areSame(add, add2));

// function areSame(add, add1){
//     return add === add1;
// }

// const obj = {
//     title:'a',
//     body:'b',
//     author:'c',
//     views: 100,
//     comments :[
//         { author: 'a', body: 'b'},
//         { author: 'c', body: 'd'}
//     ],
//     isLive: true
// }

// const per = new Person('a','b','c')
// console.log(per);

// function Person(title, body, author){
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false
// }

// let priceRange = [
//     {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
//     {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
//     {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 30},
// ];

// let restaurants = [
//     {averagePerPerson: 5}
// ];

//==========================================================================================================

//---------------------------------->ARRAYS<-----------------------------------------

//---------------->Adding Elements<--------------------

// const numbers = [3,4];

// //End:- (using push the elements will add form end of the array)

// numbers.push(5,6); // [3,4,5,6]

// //Beginning:- (using Unshift the element will add from beginning of the array)

// numbers.unshift(1); // [1,3,4,5,6]

// //Middle:- (using Splice the element will add form middle of the array)

// numbers.splice(1, 0, 2); // [1,2,3,4,5,6]
// console.log(numbers);

//----------------->Finding Elements by Primitive<------------------

// const numbers = [1,2,3,4,1,5];

// console.log(numbers.indexOf(1)) // index of 1 is 0

// //if we have 1 two times in the Array. line 493 we find value 1 in index 0
// // to f ind another one here we r searching the value form 2nd index onwords
// //by using line 499.

// console.log(numbers.indexOf(1, 2)); // another one index of 1 is 4

// console.log(numbers.lastIndexOf(4)); //index of 4 is 3;

// //We can use includes method to find value in array or not but it return boolean

// console.log(numbers.includes(3)); // if 3 is exiest then it will print true if not it prints false

//---------------->Finding Elements by Reference<----------------------

// const course = [
//     {id:1, name:'a'},
//     {id:2, name:'b'},
// ];

// const course1 = course.find(element=>{return element.name === 'a'});

// console.log(course1);

//----------------->Arrow Function<------------------

// const course1 = course.find(element=>{return element.name === 'a'}); //Arrow function

// console.log(course1);

//---------------->Removeing Elements<----------------

// const numbers = [1,2,3,4,5];

// //1.End:- removing Elements form last of the array
//  numbers.pop(5);

//  //2.Beginning:- removing elements form first of the array

//  numbers.shift(1);

//  //3.Middle:- removing elements form middle of the array

//  numbers.splice(2, 1);
//  console.log(numbers);

//--------------->Emptying an Array<------------------

// let numbers = [1,2,3,4];
// let another = numbers;

// //Solution-1
// // numbers = [];          // it was usefull but by using this we can get only orignal array empty not duplicate arrays

// //Solution-2                  // solution 2,3,4 are used to empty orginal and duplicate arrays
// // numbers.length = 0;    //it is recommended

// //Solution-3
// // numbers.splice(0, numbers.length);

// //Solution-4
// while (numbers.length > 0)
// numbers.pop();                        // it was not recommended

// console.log(numbers);
// console.log(another);

//----------->Combining and Slicing Array<----------------

// const first = [1,2,3];
// const second = [4,5,6];

// const combained = first.concat(second);
// console.log(combained);

// const slice = combained.slice(1, 4);
// console.log(slice);

//---------->Spread Operator<-------------

// const first = [1,2,3];
// const second = [4,5,6];

// const combained = [...first, 'a', ...second];  //Combained 2 arrays by using spread Operator
// console.log(combained);

// const copy = [...combained];
// console.log(copy);                  //Copy for combained..

//------------>Iterating an Array<-------------

// const num = [1,2,3,4];

// for(let key of num)
// console.log(key);

// num.forEach(function (number) {
//     console.log(number);
// });

// num.forEach((number, index) => console.log(index, number));

//----------->Joining Array<------------

// const number = [1,2,3,4];

// const joined = number.join(',');
// console.log(joined);               // Join return type is String

// const msg = 'This is a String';
// const splited = msg.split(' ');   //split return type is String array
// console.log(splited);

// const combained = splited.join('-');  //join is combained with '-' the splited Array
// console.log(combained);

//------------>Sorting Array<------------

// const courses = [
//     {id:1, name:'Node.js'},
//     {id:2, name:'JavaScript.js'}
// ];

// courses.sort((a,b) => {

//     // const nameA = a.name.toLocaleLowerCase();
//     // const nameB = b.name.toLocaleLowerCase();

//     if(a<b) return -1;
//     if(a>b) return 1;
//     return 0;
// });

// console.log(courses);

//-------->Testing the elements of an Array<----------

// const arr = [1,2,3,4];

// const positive = arr.every(function(value){    //In every() if we get one negitive number in Array it will show False
//     return value >= 0;
// });

// console.log(positive);

// const atleastOne = arr.some((value)=> {return value >= 0;}); //In Some() if we get atleat one Positive number its will show true

// console.log(atleastOne);

//--------->Filtering<----------

// const num = [2, 3 ,1, 10, 100, 500, 50, 150, 1000];

// const filtered = num.filter(number => number >= 50);

// filtered.sort((a,b) => a-b);

// const r = filtered.reduce((a,b)=> a+b);

// const m = filtered.map(a => a*2)

// console.log(filtered);
// console.log(m);
// console.log(r);

//---------->Mapping<-------------

// const num = [1,2,3,4];

// // const mapping = num.map(n => '<li>' + n + '</li>');

// // const item = '<ul>' + mapping.join('') + '</ul>'

// const obj = num
// .map(n => ({value: n}))
// .filter(obj => obj.value > 1)
// .sort((a,b) => b.value - a.value );

// console.log(obj);

//------------>Reducing an Array<---------------

// const number = [1,6,15,-10,40,20];

// const sum = number.reduce((a,b) => {return a+b},0);

// console.log(sum);

//------------>Exercise On Array<--------------

// let num = arrayFromRange(-10,-4);

// console.log(num);

// function arrayFromRange(min, max){
//     const output = [];
//     for(let i=min; i<=max; i++)
//     output.push(i);
//     return output;
// }

// const number = [1,2,3,4];

// function includes(array, searchElement){
//     for(let arr of array)
//     if(arr === searchElement)
//     return true;
//     return false;
// }

// console.log(includes(number, 4));

// const num = [1,2,3,4,5];

// console.log(except(num, [1,2]));

// function except(array, excluded){;
//     let output=[];
//     for(let arr of array)
//     if(!excluded.includes(arr))
//     output.push(arr);
//     return output;
// }

// const num = [1,2,3,4];

// const output = move(num,0,4);
// console.log(output);

// function move(array, index, offset){
//     const position = index + offset;
//     if (position >= array.lenght){
//         console.error('Invalid error.');
//         return;
//     }
//         const output = [...array];
//         const element = output.splice(index, 1)[0];
//         output.splice(position, 0, element);
//         return output;
// }

// const num = [1,2,3,4];
// const count = countOccurrence(num, -1);
// console.log(count);

// function countOccurrence(array, searchElement){
//     let count = 0;
//     for(let arr of array)
//     if(arr === searchElement)
//     count++;
// return count

// array.reduce((accumulator, current) => {
//     const occur = (current === searchElement) ? 1 : 0;
//     return accumulator + occur;
// }, 0);
// }

// const num = [1,2,3,4,5]

// const output = getMax(num);

// console.log(output);

// function getMax(array){
//     if(array.length === 0) return undefined;
// let max = array[0];
// for(let i=1; i<array.length; i++)
// if(array[i] > max)
// max = array[i];

// return max;
//    return array.reduce((a, b) => (a > b) ? a : b);
// }

// const movies = [
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating: 4.5}
// ];

// const result = movies
// .filter(m => m.year === 2018 && m.rating >= 4)
// .sort((a,b) => a.rating - b.rating)
// .reverse()
// .map(m => m.title);

// console.log(result);

//=============================================================================================================

//-------------------------------->Functions<------------------------------------

//function Decleration:-

// fun1();

// function fun1(){
//     console.log("declerstion");
// }

// //function Expression:-

// let fun2 = function (){
//     console.log("Expression")
// };
// fun2();

// let fun3 = () => console.log(" Arrow Expression");

// fun3();

//------------->Arguments<--------------

// console.log(sum(1,2,3,4,5))

// function sum(){
//     let sum = 0;
//     for(value of arguments)
//     sum += value

//     return sum;
// }

// b;
// const c= 30;
// //console.log(a, b, c);
// let b = 20;

// var a = 10;

//------------>Rest Operator<-------------

// function sum(dicount, ...args){
//     const total = args.reduce((a, b) => a+b);
//     return total * (1 - dicount);
// }

// console.log(sum(0.1, 40, 50))

//---------->Defalut Parameters<--------------

// function para(principal, rate=2.5, year=5){
//     // rate = rate || 2.5;
//     // year = year || 5;
//     return (principal * rate/100 * year);
// }

// console.log(para(15000));

//---------->Getter and Setter<-------------

// const person = {
//     firstName : 'Pandu',
//     lastName : 'Vadapalli',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value){
//         const part = value.split(' ');
//         this.firstName = part[0];
//         this.lastName = part[1];
//     }
// }

// person.fullName = 'Sitaramaraju Vadapalli';

// console.log(person.fullName);

//----------->Try and Catch<-----------

// const person = {
//     firstName : 'Pandu',
//     lastName : 'Vadapalli',

//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },

//     set fullName(value){
//         if(typeof value !== 'string')
//         throw new Error('Value is not a String');

//         const part = value.split(' ');

//         if(part.length !== 2)
//         throw new Error('Enter a First and Last Name');

//         this.firstName = part[0];
//         this.lastName = part[1];
//     }
// }

// try{
//     person.fullName = 'Sitaramaraju Vadapalli';
// }catch(e){
//     alert(e);
// }

// console.log(person.fullName);

//------------->Local v/s Global Scope<----------------

// const msg1 = 'Global variable'  //Global variable it can access anywhere of the program this is Global Scope

// function start(){
//     const msg = 'Hello' //this Local variable it can access only in code block

//     console.log(msg);    //local variable
//     console.log(msg1);  //global variable
// }

// start();

// console.log(msg1); // global variable
// console.log(msg);  //local variable it will get error

//------------>Let vs Var<-------------

// var color = 'red';    //var is used Globaly
// let age = 30;        //let is used within the code block

//---------->This KeyWord<--------------

//This keyword is used to reference the object that is executing the current function

//if that function is a acts as a method then this will refer to the object

//Are if function acts a function then it will refer to the (globol) which is window in Browser and Globol in Node

// const video = {
//     title : 'a',
//     tags:['a','b','c'],
//     showTags(){
//         this.tags.forEach(function (tag) {    //Here this callback funtion refers to the global for that we have to
//             console.log(this.title, tag);     //add this keyword as a parameter beside of the callback function
//         }, this);
//         // this.tags.forEach((tag) => {
//         //     console.log(this.title, tag);   //This is arrow function
//         // });
//     }
// }

// video.showTags();

//----------->Call Apply<---------------

// function test(){
//  console.log(this);
// }

// test.call({name: 'Sita'});
// test.apply({name: 'Rama'});
// test.bind({name: 'Raju'})();

//----------->Exercise on Function<--------------

//1.
// function sum(...args){
//     if(args.length === 1 && Array.isArray(args[0]))
//      args = [...args[0]];

//     return args.reduce((a,b) => a+b);
// }

// console.log(sum(1,2,3,4));

//2.

// const circle = {
//     radius: 1,
//     get area(){
//         return   Math.PI * this.radius * this.radius ;
//     }
// };

// console.log(circle.area);

//3.

// const num = [1,2,3,4];
// try{
//     const count = countOccurrence(num, 1);
//     console.log(count);
// }
// catch(e){
//     console.log(e.message);
// }

// function countOccurrence(array, searchElement){
//     if(!Array.isArray(array))
//     throw new Error('Invalid Array..')

//         return array.reduce((accumulator, current) => {
//         const occur = (current === searchElement) ? 1 : 0;
//         return accumulator + occur;
//     }, 0);
// }

//---------->Prototype<--------------

//Creating super class using prototype by constructer function

// function Circle(name, age){
//     this.name = name;
//     this.age = age;
// }

// Circle.prototype.study = function(){ console.log("Degree Holder");}
// Circle.prototype.Job = function(){console.log("Software developer");}
// Circle.prototype.toString = function(){
//     return "My name is " + this.name;
// }

// let c = new Circle('Sitaramaraju', 25);
// let c1 = new Circle('Pandu', 25);
// c1.study.Name = function(){ let name = "Vadapalli";  return name;};
// console.log(c);

// Array.prototype.raj = function(){
//     return console.log("Raj")
// };

// let arr = [];
//----------->Stop Watch<--------------

// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;

//     this.start = function() {
//       if (running)
//         throw new Error('Stopwatch has already started.');

//       running = true;

//       startTime = new Date();
//     };

//     this.stop = function() {
//       if (!running)
//         throw new Error('Stopwatch is not started.');

//       running = false;

//       endTime = new Date();

//       const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//       duration += seconds;
//     };

//     this.reset = function() {
//       startTime = null;
//       endTime = null;
//       running = false;
//       duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//       get: function() { return duration; }
//     });
//   }

//   const watch = new Stopwatch();
//   console.log(watch);

// function clouser(){
//     let x = 10;
//     function inner(){    //A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
//         console.log(x)   //In other words, a closure gives you access to an outer function’s scope from an inner function.
//     }
//     inner();
// }

// clouser();

//---------->Destructuring assignment<------------

// let x = [1,2,3,4,5];

// const [a,b,...c] = x;        //Arrays

// console.log(a,b,...c);

// let y = {a: 10, b: 20, c: 30, d: 40, e: 50};  //Objects
// const {a,b,...c} = y;

// console.log({a, b});

// function f(){
//     return [1,2,3,4];           //funnctions
// }

// var [a,b,...c] = f();

// console.log(c);

//--------->Callback Function<----------

// function greeting(name) {
//     alert('Hello ' + name);
//   }

//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }

//   processUserInput(greeting);

//----------->1nd way of Callback function<--------------------

// function fun(x) {
//   return x;
// }

// function fun1(callback, y) {
//   let a = 20;
//   return callback(a) * y;
// }

// function fun2(callback, z) {
//   let b = 2;
//   return callback(fun, b) - z;
// }
// function fun3(callback, s) {
//   let c = 5;
//   return callback(fun1, c) + s;
// }

// function fun4(callback, r) {
//   let d = 10;
//   console.log(callback(fun2, d) + r);
// }

// fun4(fun3, 5);

//----------->2nd way of Callback function<--------------------

// function sita(x) {
//   console.log(x);
//   return x;
// }

// function madhu(callback, y) {
//   console.log(callback * y);
//   return callback * y;
// }

// function hari(callback, z) {
//   console.log(callback - z);
//   return callback - z;
// }
// function ash(callback, s) {
//   console.log(callback + s);
//   return callback + s;
// }

// function sai(callback, r) {
//   console.log(callback + r);
// }

// sai(ash(hari(madhu(sita(20), 2), 5), 10), 5);

// function printName(callback, name) {
//   callback(`Hello ${name}`); //(Or) callback("Hello "+name); both are same
// }

// ---->Callback function inside process<-----
// printName(function (value) {
//   console.log(value);
// }, "Sitaramaraju");

// let array1 = [
//     {name: 'Sitaramaraju'},
//     {age: [25,26,27]},
//     {show(){
//         return this.age.foreach(function(age){
//             console.log(this.name, age);
//         }.bind(this));
//     }}
// ];

// for(let key of array1)
// console.log(key);

// function Test(){
//     this.name = 'raj';
// }

// Test.prototype.settime = function time(){
//    console.log(this.name);
// };

// let check = new Test();

//---------->Prototypical Inheritence<------------

// function Shape(){

// }

// Shape.prototype.dublicate = function dublicate(){
//     console.log('dublicate');
// }

// function Circle(radius){
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.drawn = function drawn(){
//     console.log('draw')
// }

// let s = new Shape();

// let c = new Circle();

// function Shape(color){
//     this.color = color;
//     }

//     Shape.prototype.dublicate = function dublicate(){
//         console.log('dublicate');
//     }

//     function Circle(radius, color){
//         Shape.call(this, color);
//         this.radius = radius;
//     }

//     Circle.prototype = Object.create(Shape.prototype);  //This is complicate way to copy hole logic for every inheritate
//     Circle.prototype.constructor = Circle;

//     Circle.prototype.drawn = function drawn(){
//         console.log('draw')
//     }

//     let s = new Shape('Green');

//     let c = new Circle(1, 'red');

//------------>Short Way function inheritance<---------------

// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// function Shape(color){
//     this.color = color;
// }
// Shape.prototype.dublicate = function dublicate(){
//     console.log('dublicate');
// }

// function Circle(radius, color){
//     Shape.call(this, color);
//     this.radius = radius;
// }
// extend(Circle, Shape);

// Circle.prototype.drawn = function drawn(){
//     console.log('draw')
// }

// function Square(size){
//     this.size = size;
// }

// extend(Square, Shape);

// let s = new Shape('Green');

// let c = new Circle(1, 'red');

//------------->Method Overriding<-----------------

// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// function Shape(){
// }

// Shape.prototype.dublicate = function dublicate(){
//     console.log('dublicate');
// }

// function Circle(){

// }

// extend(Circle, Shape);

// Circle.prototype.dublicate = function dublicate(){

//     Shape.prototype.dublicate.call(this);
//     console.log('dublicate Circle...');                      //Method Overriding...
// }

// function Square(){

// }

// extend(Square,Shape);

// Square.prototype.dublicate = function dublicate(){
//     console.log('dublicate Square...');
// }

// const shapes = [
//     new Circle(),
//     new Square()
// ];

// for(let shap of shapes)
// shap.dublicate();

//------------->Mixin And composition<----------------

// function mixin(target, ...sources){
//     Object.assign(target, ...sources);
// }

// const canEat = {
//     eat: function(){
//         console.log('eat')
//     }
// }

// const canWalk = {
//     walk: function(){
//         console.log('Walk')
//     }
// }

// const canSwim = {
//     swim: function(){
//         console.log('swim')
//     }
// }

// // let person = Object.assign({}, canEat, canWalk);

// // let fish = Object.assign({}, canEat, canSwim);        //first way

// // console.log(person);
// // console.log(fish);

// function Person(){
// }
// // Object.assign(Person.prototype, canEat, canWalk);

// function Fish(){
// }
// // Object.assign(Fish.prototype, canEat, canSwim);       //Second way

// let per = new Person();
// let fis = new Fish();

// mixin(Person.prototype, canEat, canWalk);                //Second way
// mixin(Fish.prototype, canEat, canSwim);

// console.log(per);
// console.log(fis);

//----------->Classes<-------------

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//         this.sample = function sample(){
//             console.log('Sample');
//         }
//     }
// }

// Circle.prototype. draw = function draw(){
//     console.log('draw')

// }
// let c = new Circle(1);

//-------------->Static and Instance Method<---------------

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }

//     draw(){                    //Instance Method it is within the instance class which as an object

//     }

//     static parse(str){         //Static Method it is not work by using method but it can access by using class referencs
//         //let  name = JSON.parse(str).radius;
//         let  name = parseInt(str);

//         return new Circle(name);
//     }
// }

// const c = Circle.parse('1');
// console.log(c);

//'use strict'  // strict mode is used to check errors if there are silently fail its going to turn
// them into exception and also it will change the behaver of this keyword in function

//By using functions (This keyword);

// const Circle = function(){
//     this.draw = function(){
//         console.log(this)
//     }
// }

// const c = new Circle();
// c.draw();

// const draw = c.draw;

// draw();           //When we use this function as a globol the function refernce will point to window object
// for that we can use strict mode to privent that and when we use that it will stop 'this'
//keyword to point at window object and show undefined.

// By using this Strict mode it will privent us from accidently to modify the globol object because that is bad practies

//Now by using es-6 classes (this keyword)

// class Circle{             //In es-6 by default classes are working on strict mode
//     draw(){
//         console.log(this)
//     }
// }

// const c = new Circle();

// const draw = c.draw;

// draw();  //output:- undefinde

//----------->Private Member using Symbol<--------------

// const _radius = Symbol();      //by using symbol we can see the name of the property is unique..
// const _draw = Symbol();        //by using symbol we can see the name of the method is unique..

// class Circle{
//     constructor(radius){
//         this[_radius] = radius;
//     }

//     [_draw](){
//         console.log('hai')
//     }
// }

// const c = new Circle(1);

// console.log(Object.getOwnPropertyNames(c)); //this will empty array
//  const key = Object.getOwnPropertySymbols(c)[0]; //this is used to find the property of symbol
//  console.log(key);

//----------->WeekMap<--------------

// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle{
//     constructor(radius){
//         _radius.set(this, radius);

//         _move.set(this, () => {
//             console.log('move', this);
//         });
//     }

//     draw(){
//         _move.get(this)();

//         console.log( _radius.get(this));
//     }
// }

// const c = new Circle(1);

//------------>Stack<-------------

// const _item = new WeakMap();

// class Stack{
//     constructor(){
//         _item.set(this, []);
//     }

//     push(obj){
//         let p = _item.get(this);
//         p.push(obj);
//     }

//     pop(){
//         let item = _item.get(this);

//         if(item.length === 0)
//         throw new Error('Stack is empty.');

//         return item.pop();
//     }

//     peek(){
//         const items = _item.get(this);

//         if(items.length === 0)
//         throw new Error('Stack is empty.');

//         return items[items.length-1];
//     }

//     get count(){
//         return _item.get(this).length;
//     }
// }

// let stack = new Stack();

//--------------->Promises<-----------------

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("Fail");
//   }
// });

// p.then(msg => {
//   console.log("This is in then", msg);
// }).catch(msg => {
//   console.log("This is in catch", msg);
// });

// ------------->Async Await<----------------

// function markRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Making Request to ${location}`);
//     if (location === "Google") {
//       resolve("Google says hi");
//     } else {
//       reject("We can only talk to Google");
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("procesing response");
//   });
// }

// async function dowork() {
//   try {
//     const response = await markRequest("Google");
//     console.log("Response Received");
//     const processedRequest = await processRequest(response);
//     console.log(processedRequest);
//   } catch (err) {
//     console.log(err);
//   }
// }

// dowork();

// "use strict";

// const ram = {
//   name: "Ash",
//   age: 25,
//   fun: function () {
//     console.log(this);
//     let inner = function () {
//       console.log(this);
//     };
//   }
// };

// ram.fun();

// const ram = {
//   name: "Raj"
// };

// const fun = function () {
//   console.log(this);
// };

// ram.f = fun;
// ram.f();

// const gani = {
//   name: "Suresh",
//   age: 26,
//   fun: function () {
//     console.log(this);
//     console.log(this.age - 1996);
//     // const that  = this; ------------->preseving this key word
//     const fun2 = () => {
//       console.log(this); //gani obj
//       console.log(this.name); //suresh
//     };
//     // gani.fun2 = fun2;
//     fun2();
//   }
// };

// gani.fun();

// ----------->priomises using fetch<------------

// const data = fetch("https://jsonplaceholder.typicode.com/users");

// data
//   .then(response => {
//     return response.json();
//   })
//   .then(d => {
//     for (let i = 0; i < d.length; i++) {
//       if (d[i].name === "Ervin Howell") {
//         console.log(d[i].name);
//       }
//     }
//     console.log(d.map(data => data.name));
//     console.log(d);
//   });

// console.log("hai");

// -------------->Async Await<-------------

// const data = fetch("https://jsonplaceholder.typicode.com/users/1");

// async function doStuff() {
//   const msg = await data;
//   if (msg.ok) {
//     const users = await msg.json();
//     console.log(users);
//   } else {
//     console.log("Fail");
//   }
// }
// doStuff();

// let arr = ["a", "a", "b", "c"];
// let c = [...new Set(arr)];
// console.log(c);

// let num = ["a", "a", "b", "c", "b"];

// let count = {};
// num.forEach(item => {
//   if (count[item]) {
//     count[item]++;
//     // console.log(count);
//   } else {
//     count[item] = 1;
//     // console.log(count);
//   }
// });

// console.log(count);

//------->Testing in progess<-------
// function p() {
//   return new Promise(resolve => (resolve = "quick"));
// }
// function p1() {
//   return new Promise(resolve => (resolve = "slow"));
// }

// let pro = [p, p1];

// function any(pro) {
//   for (let i = 0; i < pro.length; i++) {
//     console.log(pro[i]());
//   }
// }

// any(pro);

//----------->filling empty arry with undefind<---------------

// let a = [];
// a.length = 10;
// a.fill(undefined);

// console.log(a);

//Now we have to fill that undefind place with 1 to 10 numbers using Map

// console.log(a.map((a, i) => i + 1));

//  ---------------->callback hell or Pyramid<-----------------

// console.log("Start ", Date());
// setTimeout(
//   () =>
//     setTimeout(
//       () =>
//         setTimeout(
//           () =>
//             setTimeout(
//               () => setTimeout(() => console.log("End ", Date()), 3000),
//               3000
//             ),
//           3000
//         ),
//       3000
//     ),
//   3000
// );

//-------------->Promises Resolve Solution<-----------------

// function fun(resolve, reject) {
// setTimeout(() => {
// resolve(Date());
// console.log(Date());
// }, 3000);
// }
//
// function start() {
// return new Promise(fun);
// }
//
// console.log("Start =-------->", Date());
//
// start()
// .then(res => {
// return start();
// })
// .then(res => {
// return start();
// })
// .then(res => {
// return start();
// })
// .then(res => {
// return start();
// })
// .then(res => console.log("End =-------->", res));

// const promise1 = Promise.reject("Error");
// const promise2 = new Promise((resolve, reject) =>
// setTimeout(reject, 100, "quick")
// );
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(reject, 500, "slow")
// );
//
// const promises = [promise1, promise2, promise3];
//
// var any = function (promises) {
// var completedPromises = 0;
// return new Promise(function (resolve, reject) {
// promises.forEach(function (promise, index) {
// promise
// .then(function (value) {
// resolve(value);
// })
// .catch(function (error) {
// completedPromises++;
// if (completedPromises === promises.length) {
// reject(error);
// }
// });
// });
// });
// };
//
// any(promises)
// .then(res => console.log(res))
// .catch(rej => console.log(rej));

// function dynamicFun(a) {
//   if (a === undefined) {
//     return 0;
//   } else {
//     return function (b) {
//       if (b === undefined) {
//         return a;
//       } else {
//         return function (c) {
//           if (c === undefined) {
//             return a + b;
//           } else {
//             return function (d) {
//               if (d === undefined) {
//                 return a + b + c;
//               } else {
//                 return function (e) {
//                   return function (f) {
//                     return function () {
//                       return a + b + c + d + e + f;
//                     };
//                   };
//                 };
//               }
//             };
//           }
//         };
//       }
//     };
//   }
// }

// const one = dynamicFun(1)(2)(3)(4)(5)(6)();
// console.log(one);

// const two = dynamicFun(1)(2)(3)();
// console.log(two);

// const three = dynamicFun(1)(2)();
// console.log(three);

// const four = dynamicFun(1)();
// console.log(four);

// const five = dynamicFun();
// console.log(five);

//--------->Fibbanacci task<-----------------
// function fib(num) {
//   var num1 = 0;
//   var num2 = 1;
//   var fib;
//   var i = 0;
//   for (i = 0; i < num; i++) {
//     fib = num1 + num2;
//     num1 = num2;
//     num2 = fib;
//   }
//   return fib;
// }
// console.log("5 =--------->", fib(5));
// console.log("6 =--------->", fib(6));
// console.log("8 =--------->", fib(8));
// console.log("13 =--------->", fib(13));
// console.log("30 =--------->", fib(30));

//----------->Pollyfill for Bind<-------------

// let obj = {
//   firstName: "Sitaramaraju",
//   lastName: "Vadapalli"
// };

// function printName(homeTown, state) {
//   console.log(
//     this.firstName + " " + this.lastName + ", " + homeTown + ", " + state
//   );
// }

// Function.prototype.newbind = function (...args) {
//   let obj = this,
//     params = args.slice(1);
//   return function (...args1) {
//     obj.call(args[0], ...params, ...args1);
//   };
// };

// let print = printName.newbind(obj, "Vijayawada");
// print("Andhra pradesh");

//------------>madhu task<--------------
// let arr = [
//   { name: "Sitaramaraju", age: 25 },
//   { name: "Madhu", age: 25 },
//   { name: "Ashfaaq", age: 24 },
//   { name: "Hari", age: 26 },
//   { name: "Hema kumar", age: 26 }
// ];

// let obj = {};

// arr.forEach(value => {
//   if (obj[value.age]) {
//     obj[value.age] += ", " + value.name;
//   } else {
//     obj[value.age] = value.name;
//   }
// });

// arr.forEach(item => {
//   if (obj[item.age]) {
//     obj[item.age].push(item.name);
//   } else {
//     obj[item.age] = [item.name];
//   }
// });

// console.log(obj);

//--------------->Test<----------------

// function halve(x) {
//   let len = x.length / 2 - 0.5;
//   let xx = x[len];
//   if (x.length % 2 === 0) {
//     return x.slice(0, x.length / 2);
//   } else {
//     return x.slice(0, xx);
//   }
// }

// function halve(x) {
//   return x.filter((i, idx) => idx < Math.floor(x.length / 2)); //By using Filter
// }
// console.log(halve([1, 2, 3, 4, 5]));

// function remove(a, b) {
//   return a.filter(i => i !== b);
// }

// console.log(remove([1, 1, 1], 2));

// const arr1 = [];
// const arr2 = [1, 7, 3, 2, 4, 3, 5, 3, 5, 6, 5, 7, 1];
// for (let i = 0; i < arr2.length; i++) {
//   for (let j = i + 1; j < arr2.length; j++) {
//     if (arr2[i] === arr2[j]) {
//       arr2[j] = null;
//     }
//   }
//   if (arr2[i] !== null) {
//     arr1.push(arr2[i]);
//   }
// }

// console.log(arr1);

// let arr = arr2.filter((val, ind) => arr2.indexOf(val) === ind);

// console.log(arr);

// let arr = [1, "a", 3, "h", 2];

// let num1 = arr.filter(num => {
//   return typeof num === "number";
// });
// console.log(num1);
