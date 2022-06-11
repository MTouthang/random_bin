const personOne = {
  name: "kyle",
  age: 24,
  address: {
    city: "bangalore",
    state: "EC",
  },
};

const personTwo = {
  age: 32,
  favoriteFood: "watermelon",
};

// joining two object using the spread operation
const personThree = { ...personOne, ...personTwo };
console.log(personThree);
