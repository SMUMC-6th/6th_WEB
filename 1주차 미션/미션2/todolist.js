document.addEventListener('DOMContentLoaded', () => {
    const toDo = document.querySelector('#toDo')
    const addButton = document.querySelector('#addButton')
    const toDoList = document.querySelector('#toDoList')

    toDo.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const item = document.createElement('div'); // div

        const checkBox = document.createElement('input') // 완료
        checkBox.setAttribute('type','checkbox')


        const text = document.createElement('span') // 내용
        text.textContent = toDo.value

        const removeButton = document.createElement('button') // 삭제
        removeButton.textContent = '삭제'


        removeButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
})

        checkBox.addEventListener('change', (event) => {
            if(checkBox.checked){
                text.style.textDecorationLine = "line-through"
            }else{
                text.style.textDecorationLine = "none"
            }
        })
                
        item.appendChild(checkBox)
        item.appendChild(text)
        item.appendChild(removeButton)

        toDoList.appendChild(item)
        toDo.value = ''
    }
    })


})