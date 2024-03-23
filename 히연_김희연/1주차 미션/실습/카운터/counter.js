const number = document.querySelector('#number') // 클래스인 경우는 .클래스명
const increase = document.getElementById('increase')
const decrease = document.querySelector('#decrease')

increase.onclick = () => {
    const newNumber = parseInt(number.innerText, 10);
    number.innerText = newNumber + 1;
};

decrease.onclick = () => {
    const newNumber = parseInt(number.innerText, 10);
    number.innerText = newNumber - 1;
}
