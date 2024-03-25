const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-items");
const doneList = document.getElementById("done-items");

const handleDone = (e) => {
  const taskText = e.target.parentNode.innerText;
  addTask(taskText, doneList);
  e.target.parentNode.remove();
};

const handleRemove = (e) => {
  e.target.parentNode.remove();
};

const addTask = (taskText, list) => {
  const taskElement = document.createElement("div");
  const button = document.createElement("button");
  button.setAttribute("type", "button");

  const buttonText =
    list === todoList
      ? (button.innerText = "완료")
      : (button.innerText = "삭제");
  const clickHandler =
    list === todoList
      ? button.addEventListener("click", handleDone)
      : button.addEventListener("click", handleRemove);
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    addTask(newTask, todoList);
    todoInput.value = "";
  }
});
