document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const number = document.getElementById('number');
    const increaseBtn = document.querySelector('#increase');
    const decreaseBtn = document.getElementById('decrease');
    increaseBtn.addEventListener('click', () => {
        number.textContent = ++counter;
    });
    decreaseBtn.addEventListener('click', () => {
        number.textContent = --counter;
    });
 });
