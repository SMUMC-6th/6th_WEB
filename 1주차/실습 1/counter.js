let x = 0;
let result = 0;
const numberBtn = document.getElementById('number');
const plusBtn = document.getElementById('increase');
const minusBtn = document.getElementById('decrease');
console.log(number);
console.log(increase);
console.log(decrease);

document.getElementById("number").innerHTML = x;
document.getElementById("increase").addEventListener('click', () => {
    console.log('increase가 클릭됨');
    plus();
});
document.getElementById("decrease").addEventListener('click', () => {
    console.log('decrease가 클릭됨');
    minus();
});

function plus() {
    result = ++x;
    document.getElementById("number").innerHTML = result;
}

function minus() {
    result = --x;
    document.getElementById("number").innerHTML = result;
}