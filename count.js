const number = [1,2,3,4,5];
function countOccurrences(array, searchElement){
    // let count = 0;
    // for(let e of array)
    // if(e === searchElement)
    // count++;
    // return count;
return array.reduce((array, current)=> {const occurrence = (current === searchElement) ? 1 : 0;
    //console.log(accumlator, current, searchElement);
    return array + occurrence;
}, 0);

}
const output = countOccurrences(number, 1);
console.log(output);