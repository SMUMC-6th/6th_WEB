const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todo = document.getElementById("todo-todo");

const addTodo = (newTodo) => {
  const div = document.createElement("div");
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerText = "완료";

  div.innerText = newTodo;
  div.appendChild(button);

  todo.appendChild(div);
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 페이지 리로드 방지
  const newTodo = todoInput.value;
  todoInput.value = "";

  addTodo(newTodo);
});
