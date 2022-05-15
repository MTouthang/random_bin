const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the data --");
    // resolve({
    //   user: "ed",
    // });
    reject(new Error("user not login"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => console.log(error));

const data = { name: "charles", age: "40" };

console.log(data.name);
