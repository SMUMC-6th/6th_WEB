// 피드백 1 : ...으로 보이게 처리 : white-space : no-wrap, overflow : hidden, text-overflow: ellipsis
// 피드백 2 : 버튼 효과 주기 -> transform(0.9) 
// 피드백 3 : 항목 추가하면 스크롤 생기게 , 가장 마지막 항목을 먼저 보일수 있도록 위치 조정 (.scrollIntoView({block : center}))
// 이 때 스크롤 창 범위를 지정해놔야 무한히 커지지 않음. 
// 피드백 4 : input autofocus 속성을 이용해서 자동으로 빈 인풋일때 포커스되도록 
// 피드백 5 : classList.add 말고 .setAttribute('추가할 형식타입', '추가할 형식의 name' );
// 피드백 6 : 노드 복사할 일이 있을 때, 변수에 저장해서 옮기지 말고, .cloneNode(true(깊은복사)/False(얕은복사))
// 깊은 복사 : 하위 요소까지 모두 복사, 얕은 복사 : 지금 요소만 복사


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

  todoInput.focus();
  todoItem.scrollIntoView({ block: "end" });
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

  li.scrollIntoView({ block: "end" });
}


