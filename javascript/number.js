var x = 20;
var y = 30;

console.log("The sum is: ", x + y);

let a = new Number(5);
let b = new Number(5);

console.log(a == b); // comparing of two javaScript object always return false

// toFixedMethod
let ex = 9.656;
console.log(ex.toFixed(2));

// valueOf
console.log(ex.valueOf()); // convert number object to primitive values

let max = Number.MAX_VALUE; // return max possible number in javascript
console.log(max);
console.log(Number.MIN_VALUE); // return smallest possible number in javascript

let num = 5.555;
console.log(num.toPrecision(2));
console.log(num.toExponential(4));
