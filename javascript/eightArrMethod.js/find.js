/**
 * The find() method returns the first element in the provided array
 *  that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 */

const items = [
  {
    name: "Bike",
    price: 100,
  },
  {
    name: "TV",
    price: 200,
  },
  {
    name: "Album",
    price: 10,
  },
  {
    name: "Book",
    price: 5,
  },
  {
    name: "Phone",
    price: 500,
  },
  {
    name: "Computer",
    price: 1000,
  },
  {
    name: "Keyboard",
    price: 25,
  },
];

const album = items.find((item) => {
  return item.name === "Album";
});
console.log(album);

items.forEach((item) => {
  console.log(item.name);
});

// some() method check for a particular item present or not in the whole array
// if present return true else false

// every() method check for all

const isExpensive = items.some((item) => {
  return item.price >= 100;
});
console.log(isExpensive);

// reducer() method

const sum = items.reduce((currentValue, item) => {
  return item.price + currentValue;
}, 0);

console.log(sum);

// simple array -
const arr = [1, 4, 3, 5, 22];

const includes = arr.includes(5);
console.log(includes);
