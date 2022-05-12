result = 22 / 7;

console.log(result.toFixed(3));

let floatRes = result.toFixed(2);
console.log(floatRes);

console.log(Math.floor(floatRes));
console.log(Math.ceil(floatRes));

let ranNumber = Math.random() * 5;
console.log(Math.ceil(ranNumber));

let upper = 25;
let lower = 20;

let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower;
console.log(myRandom);
