const companies = [
  { name: "Company one", category: "Finance", start: 1981, end: 2003 },
  { name: "Company two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company four", category: "Auto", start: 1999, end: 2007 },
  { name: "Company five", category: "Retail", start: 1999, end: 2007 },
  { name: "Company six", category: "Auto", start: 1999, end: 2007 },
  { name: "Company seven", category: "Auto", start: 1999, end: 2007 },
  { name: "Company eight", category: "Retail", start: 1999, end: 2007 },
  { name: "Company nine", category: "Auto", start: 1999, end: 2007 },
];

const age = [22, 4, 22, 44, 53, 62, 22, 72, 29, 25, 64, 32];

// Basic for loop --
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach method --
/**
 * The forEach method call a function and iterates over the element of an array.
 * The forEach() method can also be used to Maps and Sets
 */

// companies.forEach(function (company) {
//   console.log(company.name);
// });

// filter --
/**
 * The filter method creates a new array with all the element that pass the test implemented
 * by the provided function
 */
// let adult = [];
// for (let i = 0; i < age.length; i++) {
//   if (age[i] > 18) {
//     adult.push(age[i]);
//   }
// }
// console.log(adult);

// const canDrink = age.filter(function (age) {
//   if (age > 23) {
//     return true;
//   }
// });

// console.log(canDrink);

// arrow function with filter --
// const eligible = age.filter((age) => age >= 21);

// console.log(eligible);

// Without arrow function ---
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// with arrow function --
// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompanies);

/**
 * The Map object holds key-value pairs and remembers the original insertion
 * order of the keys. Any value both objects and primitive values
 * may be used as either a key or a value.
 */

// const map1 = new Map();
// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1.get("a"));
// console.log(map1.size);

// console.log(map1.delete("b"));
// console.log(map1.size);

/**
 * The map() method creates a new array populated with the results of calling a provided
 * function on every element in the calling array.
 */

// const companyName = companies.map(function (company) {
//   console.log(`${company.name} [${company.start} - ${company.end}]`);
// });

// const companyName1 = companies.map((company) =>
//   console.log(`${company.name} [${company.start} - ${company.end}]`)
// );

/**
 * The sort() method sorts the element of an array in place and return the sorted array.
 *
 */

// const ageSort = age.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(ageSort);

// const ageSort2 = companies.sort((a, b) => (a.end < b.end ? 1 : -1));
// console.log(ageSort2);

// const numb = age.sort();
// console.log(numb);

// const sortNumb = age.sort((a, b) => a - b);
// console.log(sortNumb);

/**
 * The reduce() method executes a reducer function on each element of the array
 * and return single output value
 */

// const ageSum = age.reduce(function (total, age) {
//   return total + age;
// }, 9);

// console.log(ageSum);

// let sumArr = 0;
// for (let i = 0; i < age.length; i++) {
//   sumArr += age[i];
// }
// console.log(sumArr);

// const totalYearCompany = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);

// const totalYearCompany = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );

// console.log(totalYearCompany);

/**
 * Combine method combining all the method ---
 */
const combine = age
  .map((age) => age * 2)
  .filter((age) => age <= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combine);

/**
 * The find method --.
 *
 */
const findCompany = companies.find((company) => company.name === "Company one");

console.log(findCompany);
