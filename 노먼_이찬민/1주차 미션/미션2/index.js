let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");
let completeList = document.getElementById("completeList");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  createTodoListItem(todoInput.value);
  todoInput.value = "";
}); 

// remove 버튼 이벤트 콜백함수
function removeCallBack(event) {
  const removeItem = event.target.parentElement;
  removeItem.remove();
}

// complete 버튼 이벤트 콜백함수 ... 어렵당
function completeCallBack(event) {
  // 미리 이벤트 타겟(완료버튼)의 이벤트리스너 삭제 후 완료리스트로 전달하기 -> 그러면 완료 버튼이 안눌리지;; 
  // 이벤트 발생 후 아이템 삭제까지는 버튼이 작동중이어야함 -> 새로 버튼 만들고 바꿔버리자.
  // 새로운 삭제 버튼 생성
  const removeButton = document.createElement("button");
  removeButton.innerText = "삭제";
  removeButton.addEventListener("click", removeCallBack);

  // 이벤트 타겟(완료 버튼)의 부모 요소(할 일 리스트 아이템) 변수에 저장
  const todoItem = event.target.parentElement;

  // !!! 기존의 버튼 제거 - todoItem이라는 객체변수에서 쿼리셀렉터(type)으로 찾아서 제거
  const completeButton = todoItem.querySelector("button");
  todoItem.removeChild(completeButton);

  // 완료 리스트로 항목 이동
  completeList.appendChild(todoItem);

  // 새로운 삭제 버튼 추가
  todoItem.appendChild(removeButton);
}

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
  button.addEventListener("click", completeCallBack);
  todoList.appendChild(li);
  console.log(li);
}


