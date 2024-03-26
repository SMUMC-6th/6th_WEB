// getElementById, querySelector 모두 document. 으로 사용
// querySelector에서 id로 찾을 때 #id, 어떤 요소의 하위요소를 찾고싶다면
// querySelector( 어떤 요소, 하위요소 )로 사용

// 그리고 dom 요소 찾아오는 구문 오류 발생 시, 이벤트리스너가 안되는 경우 있음.
// 만약 문제 발생하면 변수 할당 문제인지 먼저 검토

// 피드백 1 : DOM 객체 너무 많음. 메세지는 innerText로 변경
// 피드백 2 : 문자열 trim 해주기


let membershipForm = document.getElementById("membership");

let nameMessage = document.querySelector(".nameMessage");
let emailMessage = document.querySelector(".emailMessage");
let ageMessage = document.querySelector(".ageMessage");
let passwordMessage = document.querySelector(".passwordMessage");
let passwordValidMessage = document.querySelector(".passwordValidMessage");

const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{4,12}$/;

function nameCheck(name) {
  if (name.length === 0) {
    nameMessage.innerText = "필수 입력 항목입니다.";
    nameMessage.style.color = "red";
    return 0;
  }
  else{
    nameMessage.innerText = "멋진 이름이네요!"
    nameMessage.style.color = "green";
    return 1;
  }
}

function emailCheck(email) {
  if (emailPattern.test(email) === false) {
    emailMessage.innerText = "올바른 이메일 형식이 아닙니다.";
    emailMessage.style.color = "red";
    return 0;
  }

  else{
    emailMessage.innerText = "올바른 이메일 형식입니다!";
    emailMessage.style.color = "green";
    return 1;
  }
}

function ageCheck(age) {
  if (Number.isNaN(age) === true) {
    ageMessage.innerText = "나이는 숫자 형식이어야 합니다.";
    ageMessage.style.color = "red";
    return 0;
  }
  else if (age < 0) {
    ageMessage.innerText = "나이는 음수가 될 수 없습니다.";
    ageMessage.style.color = "red";
    return 0;
  }

  else if (age.includes(".") === true) {
    ageMessage.innerText = "나이는 소수가 될 수 없습니다.";
    ageMessage.style.color = "red";
    return 0;
  }

  else if (age < 19) {
    ageMessage.innerText = "미성년자는 가입할 수 없습니다.";
    ageMessage.style.color = "red";
    return 0;
  }
  
  else{
    ageMessage.innerText = "올바른 나이 형식입니다!";
    ageMessage.style.color = "green";
    return 1;
  }
}

function passwordCheck(password) {
  if (password.length < 4) {
    passwordMessage.innerText = "비밀번호는 4자리 이상입니다.";
    passwordMessage.style.color = "red";
    return 0;
  }
  else if (password.length > 12) {
    passwordMessage.innerText = "비밀번호는 12자리 이하입니다.";
    passwordMessage.style.color = "red";
    return 0;
  }
  else if (passwordPattern.test(password) === false) {
    passwordMessage.innerText = "비밀번호는 영어,숫자,특수문자가 모두 포함되어야 합니다.";
    passwordMessage.style.color = "red";
    return 0;
  }
  else{
    passwordMessage.innerText = "올바른 비밀번호 형식입니다!";
    passwordMessage.style.color = "green";
    return 1;
  }
}

function passwordValidCheck(password, passwordValid) {
  if ((passwordValid === password) === false || passwordValid.length === 0) {
    passwordValidMessage.innerText = "비밀번호가 일치하지 않습니다.";
    passwordValidMessage.style.color = "red";
    return 0;
  }
  else{
    passwordValidMessage.innerText = "비밀번호가 일치합니다!";
    passwordValidMessage.style.color = "green";
    return 1;
  }
}

membershipForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  let result = 0;
  // 1. 각 요소 조건 확인하기
  result += nameCheck(document.getElementById("userName").value.trim());
  result += emailCheck(document.getElementById("userEmail").value.trim());
  result += ageCheck(document.getElementById("userAge").value.trim());
  result += passwordCheck(document.getElementById("userPassword").value.trim());
  result += passwordValidCheck(document.getElementById("userPassword").value.trim(), document.getElementById("userPasswordValid").value.trim());

  // 모두 성공시 모달창 생성
  if (result === 5) {
    console.log("hello");
    let modalCloseButton = document.querySelector("#modalContent .close");
    let modalContainerElement = document.getElementById("modalContainer");
    let bodyElement = document.getElementById("body");
    let contentElement = document.getElementById("content");
    

    bodyElement.classList.add("disappear");
    // contentElement.classList.add("disappear");
    membershipForm.classList.add("disappear");
    
    modalContainerElement.classList.remove("hide");
    modalContainerElement.classList.add("highlight");

    modalCloseButton.addEventListener("click", function (event) {
      modalContainerElement.classList.add("hide");
      modalContainerElement.classList.remove("highlight");
      bodyElement.classList.remove("disappear");
      // contentElement.classList.remove("disappear");
      membershipForm.classList.remove("disappear");
    });
  }
});
