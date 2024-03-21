const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todo = document.getElementById("todo-todo");
const done = document.getElementById("done-todo");

const handleDone = (e) => {
  addTodo(e.target.parentNode.innerText.slice(0, -2), done);
  e.target.parentNode.remove();
};

const handleRemove = (e) => {
  e.target.parentNode.remove();
};

const addTodo = (newTodo, todoState) => {
  const div = document.createElement("div");
  const button = document.createElement("button");
  button.setAttribute("type", "button");

  if (todoState == todo) {
    button.innerText = "완료";
    button.addEventListener("click", handleDone);
  } else {
    button.innerText = "삭제";
    button.addEventListener("click", handleRemove);
  }

  div.innerText = newTodo;
  div.appendChild(button);

  todoState.appendChild(div);
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 페이지 리로드 방지
  const newTodo = todoInput.value;
  todoInput.value = "";

  addTodo(newTodo, todo);
});
