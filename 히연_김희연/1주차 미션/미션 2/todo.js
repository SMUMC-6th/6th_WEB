const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-items");
const doneList = document.getElementById("done-items");

const handleDone = (e) => {
  const taskText = e.target.parentNode.innerText.slice(0, -2);
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

  const buttonText = list === todoList ? "완료" : "삭제";
  const clickHandler = list === todoList ? handleDone : handleRemove;

  button.innerText = buttonText;
  button.addEventListener("click", clickHandler);

  taskElement.innerText = taskText;
  taskElement.appendChild(button);

  list.appendChild(taskElement);
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    addTask(newTask, todoList);
    todoInput.value = "";
  }
});
