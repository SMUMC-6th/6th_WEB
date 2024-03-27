const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-items");
const doneList = document.getElementById("done-items");


//해야할일 추가 함수
const addTodo = (todoText) => {
    const todoItems = document.getElementById('todo-items');
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = todoText;
    todoItems.appendChild(todoItem);
    todoItem.addEventListener('click', markAsDone);
};
//해야할 일을 완료처리하는 함수
const handleDone = (e) => {
    const taskText = e.target.parentNode.innerText.slice(0, -2);
    addTask(taskText, doneList);
    e.target.parentNode.remove();
  };
  //해낸일을 삭제하는 함수
const handleRemove = (e) => {
    e.target.parentNode.remove();
  };

// input 컴포넌트에서 키 입력 이벤트를 처리하는 함수
const keyCodeCheck = (e) => {
    if (e.keyCode === 13) { // Enter 키를 눌렀을 때
        e.preventDefault(); // 기본 동작 막기
        const todoInput = document.getElementById('todo-input');
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodo(todoText); // 입력된 내용으로 해야 할 일 추가
            todoInput.value = ''; // 입력창 비우기
        }
    }
};

// 입력한 텍스트를 가져와서 작업 목록에 추가
todoInput.addEventListener('keydown', keyCodeCheck);

// 해낸 일 삭제 버튼을 클릭하면 지워짐
const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
    button.addEventListener('click', deleteDone);
});
