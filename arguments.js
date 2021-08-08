function arg() {
  let total = 0;
  // for(let val=1; val<= arguments.length; val++)
  //                 (or)
  for (let val of arguments) //This is for of loop iterator
    total += val + 1;
  return total;
}

console.log(arg(1, 2, 3, 4, 5, 6));
