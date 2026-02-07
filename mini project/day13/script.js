let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(task);
  input.value = "";
  showTasks();
}

function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    list.innerHTML += "<li>" + tasks[i] + "</li>";
  }
}
