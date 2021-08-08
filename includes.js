const number = [1, 2, 3, 4];
function includes(array, searchElement){
    for(let e of array)
    if(e === searchElement)
    return true;
    return false;
}
console.log(includes(number, 1));