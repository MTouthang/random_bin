let myArr = ["honda", "volvo", "aruti"];
console.log(myArr);

console.log(Array.isArray(myArr));

// popping to remove the last item in the array
myArr.pop();
console.log(myArr);

myArr.push("Tayota");
console.log(myArr);

// shift and unshift method in array
let fruits = ["mango", "kiwi", "pineapples"];
let fruit = fruits.shift();
console.log(fruits);
console.log(fruit);

fruits.unshift("mango");
console.log(fruits);

/**
 * Array element can be deleted using the javascript operator delete
 * Using delete leaves undefined holes in the array
 * use pop() or shift() instead
 */

// Concatenating Array ---
// The concat() method creates a new array by merging concatenating existing arrays

let dog = ["blacky", "browny", "luffy"];
let bird = ["Parrot", "Peacock", "Kiwi"];

let mix = dog.concat(bird);
console.log(mix);

/**
 * Splicing and slicing Arrays
 * splice()  method adds new item to an array
 * slice() method slice out a pieces of an array
 */

// splice method
const frt = ["apple", "mango", "banana", "orange"];
frt.splice(2, 0, "lemon", "kiwi");
frt.splice(0, 1);
console.log(frt);

// slice method
console.log(frt.slice(0, 3));

/**
 * Sorting of Array
 */
// The sort method sort an array in alphabetical order
const sortList = frt.sort();
console.log("Sorted list", sortList);
console.log(sortList.reverse());

const numList = [1, 4, 3, 5, 2, 9];
console.log(numList.sort());
console.log(numList.reverse());
