function arrayfromrange(min, max){
    const num = [];
    for(let i=min; i<=max; i++)
    num.push(i);
    return num;
}
const number = arrayfromrange(1, 4);
console.log(number);