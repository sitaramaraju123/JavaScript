function getWage(baseSalary, overTime, rate){
    return baseSalary + (overTime * rate);         //procedure oriented programming
}

let employee = {
    baseSalary: 30_000,
    overTime: 10,
    rate:20,
    getWage: function(){                                         ////object oriented programming
        return this.baseSalary + (this.overTime * this.rate);
    }
};

console.log(getWage(30_000, 10, 20));