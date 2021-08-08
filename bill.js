function bill(discount, ...price){
    const total = price.reduce((a,b) => a+b);
    return total * (1 - discount);
}
console.log(bill(0.5, 20, 30));