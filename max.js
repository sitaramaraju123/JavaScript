const number = [1,2,3,4,5];
function getmax(array){
  if(array.length === 0) return undefined;
  
//    let max = array[0];
//    for(let i=1; i < array.length; i++)
//    if(array[i]>max)
//    max = array[i];
//    return max;

return array.reduce((a, b) => (a > b) ? a : b);
}
const max = getmax(number);
console.log(max);