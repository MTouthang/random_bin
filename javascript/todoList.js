let todos = [
  {
    title: "wakeup",
    desc: "wake up early in the morning",
  },
  {
    title: "cook food",
    desc: "after wake up make and prepare breakfast",
  },
  {
    title: "Coding karlo",
    desc: "Start your day with coding",
  },
];

const index = todos.findIndex(function (todo, index) {
  console.log(todo);
  return todo.title === "cook food";
});

console.log(index);
