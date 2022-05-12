const todos = [
  {
    title: "wake Up",
    isDone: true,
  },
  {
    title: "breakfast",
    isDone: true,
  },
  {
    title: "code",
    isDone: true,
  },
  {
    title: "play game ",
    isDone: false,
  },
  {
    title: "complete assessment",
    isDone: false,
  },
  {
    title: "sleep",
    isDone: false,
  },
];

const todoDone = todos.filter((todo) => {
  if (todo.isDone === true) {
    let completedTask = todo.title;
    return completedTask;
  }
});

todoDone.forEach((todo, index) => {
  console.log(todo.title);
});

console.log("5" + 5);
