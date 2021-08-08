// let arr = [1, 2, 3, 4, 5];
// let get = arr.map(item => item * 2).reduce((a, b) => a + b);
// console.log(get);
// const a = arr.find(v => v == 5);
// console.log(a);
// let arr = [1, 2, 3, 4];
// let even = arr.reduce((acc, Value) => {
//   console.log(acc);
//   return acc + Value;
// }, 0);
// console.log(even);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let a = arr.reduce((item, item1) => {
  let a = [];
  if (item1 % 2 === 0) {
    a.push(item1);
  }
  return a;
});
console.log(a);
