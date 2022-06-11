// swapping of simple array
arr = [01, 41, 300, 5, 7, 10];
// one way --
/*
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
console.log(arr);
 */
// 2nd way --
console.log(arr.sort(sortCompare));
function sortCompare(a, b) {
  return a - b;
}

// swapping of object

const personInfo = [
  {
    name: "mang",
    age: 18,
  },
  {
    name: "Touthang",
    age: 30,
  },
  {
    name: "bart",
    age: 14,
  },
];

const sortPf = personInfo.sort(objSort);

function objSort(a, b) {
  return a.age - b.age;
}

console.log(sortPf);
