const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach:-

// for(let i=0; i<companies.length; i++){
//   console.log(companies[i]);               //(Normal way)
// }

// companies.forEach(function(company){
//   console.log(company);                       // (Anonymous function way)
// });

// companies.forEach(company => console.log(company));   // (Arrow function way)

// =------------------------------------------------------------------------------------->

//Filter :-

// for(let i=0; i< ages.length; i++){
//   if(ages[i] <= 21){
//     console.log(ages[i]);                  // (Normal way to filter the ages)
//   }
// }

// const canMarrage = ages.filter(function(age){
//   if(age >= 20 && age <= 33){                       //(Anonymous funtion)
//     console.log("Eligible to get Marry "+ age)
//   }
// });

// const canMarrage = ages.filter(age => age>=20 && age<=33);       //(Arrow Function)
// console.log(canMarrage);

//=--------------------------------------------------------------------------------------->

//Map:-

// const cName = companies.map(company => `${company.name} -> ${company.category}`);
// console.log(cName);

//=--------------------------------------------------------------------------------------->

//Sort:-

// const company = companies.sort((a,b) => (a.start < b.start ? 1 : -1));
// console.log(company);

// const age = ages.sort((a,b) => a - b);
// console.log(age);

//=-------------------------------------------------------------------------------------->

//Reduce:-

// let ageSum =0;
// for(let i=0; i<ages.length; i++){
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//   return total+= age;
// }, 0);

const ageSum = ages.reduce((total, age) => (total += age), 0);
console.log(ageSum);
