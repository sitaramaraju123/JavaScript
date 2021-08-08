function m(num1){
    if(num1 > 0){
        console.log(num1);
        num1--;
        m(num1);
    }
}
m(10);