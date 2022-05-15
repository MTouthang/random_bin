console.log("Start");

//   get user Email
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("We have the data");
    callback({
      userEmail: email,
    });
  }, 5000);
}

// get user video
function getVideo(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
}

const user = loginUser("dev@gmail.com", 1234567890, (user) => {
  console.log(user);
  getVideo(user.userEmail, (video) => console.log(video));
});

console.log("Finish");
