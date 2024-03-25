const number = document.getElementById("number");  // id 속성을 갖고있는 항목 반환
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number);   // 괄호 안의 메시지를 콘솔창에 출력
console.log(increase);
console.log(decrease);

console.log(number.innerText);   // 내용
console.log(increase.offsetTop); // top의 위치
console.log(decrease.id);        // id

increase.onclick = () => {
  console.log("increase가 클릭됨");
  const current = parseInt(number.innerHTML, 10); // 문자열을 숫자(10진수)로 변환
  number.innerText = current + 1;
};

decrease.onclick = () => {
  console.log("decrease가 클릭됨");
  const current = parseInt(number.innerHTML, 10); // 문자열을 숫자(10진수)로 변환
  number.innerText = current - 1;
};