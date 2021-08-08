const number = [1,2,3,4];
function getmin(array){
    return array.reduce((a,b) => (a < b) ? a : b);
}
const min = getmin(number);
console.log(min);