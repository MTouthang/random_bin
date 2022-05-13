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

// others string methods
let name = "Touthang";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
let lastName = "Mang";

// concat and plus are same for joining to string..
console.log(lastName.concat(" ", name));
console.log(name + " " + lastName);

// trim - remove all the white spaces in a string
let garbageText = " Hello   ";
console.log(garbageText.trim());

// padStart and padEnd method - to put number of string or number in the beginning and end
// of the another string
let padText = "hi";
console.log(padText.padStart(4, "hi"));
console.log(padText.padEnd(3, "3"));

// toString method --
let numb = 5;
let stringNumb = numb.toString();
console.log(typeof stringNumb);

// 3 method to extract string characters charAt, charCodeAt and propertyes ar[]
let example = "example";
console.log(example.charAt(0));
console.log(example.charCodeAt(1)); // return unicode of the character of specific index
console.log(example[0]);
console.log(example);

// split method in string -- which converts the string to array
console.log(example.split("|"));

/**
 * JavaScript search methods
 * 1.String indexOf()
 * 2.String lastIndexOf()
 * 3.String startsWith()
 * 4.String endsWith()
 */

let str = "please locate where locate occurs";
console.log(str.indexOf("locate"));
// both indexOf and lastIndexOf return -1 if the text is not found.
// both indexOf and lastIndexOf except second parameter as the starting position of the search

console.log(str.indexOf("locate", 15));
console.log(str.lastIndexOf("locate", 15));
// search from the start position and move in decreasing manner

// match method -- searches a string for a match
let text2 = "The rain in Spain stays mainly in the plain";
console.log(text2.match(/spain/gi));

// includes() method return true if the string contain specific value
// includes(searchValue, start)
console.log(text2.includes("rain"));

// startsWith() method return true if a string begins with a specified value, otherwise false
console.log(text2.startsWith("the")); // case sensitive
console.log(text2.endsWith("n")); // case sensitive, endsWith(searchValue, length)

// String template
/**
 * back tick syntax ` ` and interpolation ${...}
 */
let firstName = "John";
let lastName1 = "Doe";

let text11 = `Welcome ${firstName}, ${lastName1}!`;
console.log(`This is string template: ${text11}`);
