let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise Resolve");
  }, 4000);
});

async function asyncFunc() {
  console.log("start");
  let result = await promise;
  console.log(result);
  console.log("hello");
}

asyncFunc();
