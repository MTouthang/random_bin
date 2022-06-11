// Function with hoisting

dogName("Blecky");

function dogName(name) {
  console.log("my dog name is: " + name);
}

// function without hoisting
function dogName(name) {
  console.log("my dog name is: " + name);
}

dogName("Luffy");
