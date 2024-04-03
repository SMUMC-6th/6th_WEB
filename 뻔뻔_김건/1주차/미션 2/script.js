document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');
    const doneList = document.getElementById('doneList');

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('completeBtn');
        completeBtn.addEventListener('click', function() {
            moveTask(taskItem);
        });

        taskItem.appendChild(completeBtn);
        todoList.appendChild(taskItem);
    }

    function moveTask(taskItem) {
        const taskText = taskItem.textContent;

        const newItem = document.createElement('div');
        newItem.classList.add('task');
        newItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', function() {
            doneList.removeChild(newItem);
        });

        newItem.appendChild(deleteBtn);
        doneList.appendChild(newItem);

        // Remove from todoList
        todoList.removeChild(taskItem);
    }
});
