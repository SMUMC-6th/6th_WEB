let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("todoInput");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

function createTodoListItem(str) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
}
