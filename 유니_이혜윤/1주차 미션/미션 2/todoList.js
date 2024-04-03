document.addEventListener("DOMContentLoaded", function() {
  // form을 선택
  const form = document.querySelector(".todo-form");
  form.addEventListener("submit", function(e) {
      // 폼 제출 시 페이지가 새로 고침되는 동작을 방지
      e.preventDefault();

      const input = document.getElementById("todo-input");
      const inputValue = input.value.trim();

      if(inputValue) {
          const newItem = document.createElement("div");
          newItem.textContent = inputValue;

          // 완료 버튼
          const completeButton = document.createElement("button");
          completeButton.textContent = "완료";
          completeButton.classList.add("complete-button");

          completeButton.addEventListener("click", function() {

            // 해낸 일에 항목 추가
            const doneList = document.getElementById("done-list");
            doneList.appendChild(newItem);

            // 삭제 버튼
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "삭제";
            deleteButton.classList.add("delete-button");

            deleteButton.addEventListener("click", function() {
                // 항목 삭제
                doneList.removeChild(newItem);
            });

            // 완료 버튼 제거, 삭제 버튼 추가
            newItem.removeChild(completeButton);
            newItem.appendChild(deleteButton);
        });

        // 완료 버튼
        newItem.appendChild(completeButton);

        const todoList = document.getElementById("todo-list");
        todoList.appendChild(newItem);

        input.value = ""; // 입력창을 초기화
    }
});
});