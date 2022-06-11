/**
 * The filter() method creates a new array with all elements that pass the test
 * implemented by the provided function.
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

const filterOut = items.filter((items) => {
  return items.price <= 100;
});

function callbacks(items) {
  return items.price <= 100;
}

const filterOut1 = items.filter(callbacks);

console.log(items); // does not change the original object
console.log(filterOut1); // this is the filter out object
