/**
 * Javascript strings are for storing and manipulating text.
 * A Javascript strings is zero or more characters written inside quotes.
 */

const { type } = require("express/lib/response");

let text = "John Doe";
console.log(text);

let textObject = new String("John Doe");
console.log(textObject);

// String property --
/*
    1.constructor - returns the string's constructor function
    2.length - return the length of the string
    3.prototype - allow you to add properties and method to an object
*/

let stringLen = text.length;
console.log(stringLen);

// method in javascript
/*
    In javascript method and properties and also available to primitive values,
    because Javascript treats primitive value as object when executing method and properties
*/

//1.slice(start, end) - slice method extracts a part of a string and return
// the extracted part in a new string.
// for negative its counted from the end of the string

let originalString = "Apple, Banana, Kiwi";
let newString = originalString.slice(7, 13); // slice the portion of the string from position 7 to 13 but 13 not included
console.log(newString);

// Difference between substr() and slice is that the second parameter specifies the length of the extracted part in substr()

//   2. substring(start, end) -
let strSubstring = originalString.substring(7, 13);
console.log(strSubstring);

//  3. substr(start, length)

let dogName = "My dog name is Bod";
let newDogName = dogName.replace("Bob", "Blackey");
console.log(newDogName);
dogName.
