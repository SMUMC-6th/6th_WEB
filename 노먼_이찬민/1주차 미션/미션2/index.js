let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");
let completeList = document.getElementById("completeList");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  createTodoListItem(todoInput.value);
  todoInput.value = "";
});

function createTodoListItem(str) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  
  // dom 변수로 appendChild 함수를 통한 요소 생성, 및 내부속성 변경
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = str;
  button.innerText = "완료";

  // 버튼에 이벤트 달기 - 이벤트 타겟(버튼)의 상위요소(리스트 아이템)를 삭제 및 이동
  button.addEventListener("click", function (event) {
    const del = event.target.parentElement;
    del.remove();
    completeList.appendChild(del);
  })
  todoList.appendChild(li);
  console.log(li);
}


