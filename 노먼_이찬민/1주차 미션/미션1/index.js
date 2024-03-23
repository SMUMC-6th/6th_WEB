// getElementById, querySelector 모두 document. 으로 사용
// querySelector에서 id로 찾을 때 #id, 어떤 요소의 하위요소를 찾고싶다면
// querySelector( 어떤 요소, 하위요소 )로 사용

// 그리고 dom 요소 찾아오는 구문 오류 발생 시, 이벤트리스너가 안되는 경우 있음.
// 만약 문제 발생하면 변수 할당 문제인지 먼저 검토

let membershipForm = document.getElementById("membership");

let nameCheck = 0;
let emailCheck = 0;
let ageCheck = 0;
let passwordCheck = 0;
let passwordValidCheck = 0;

let nameInputElement = document.getElementById("userName");
let nameSuccessElement = document.querySelector("#name .successMessage");
let nameFailElement = document.querySelector("#name .failMessage");

let emailInputElement = document.getElementById("userEmail");
let emailSuccessElement = document.querySelector("#email .successMessage");
let emailFailElement = document.querySelector("#email .failMessage");
let emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

let ageInputElement = document.getElementById("userAge");
let ageSuccessElement = document.querySelector("#age .successMessage");
let ageNumFailElement = document.querySelector("#age .numFailMessage");
let ageMinusFailElement = document.querySelector("#age .minusFailMessage");
let ageFractionFailElement = document.querySelector(
  "#age .fractionFailMessage"
);
let ageMinFailElement = document.querySelector("#age .minFailMessage");

let passwordInputElement = document.getElementById("userPassword");
let passwordSuccessElement = document.querySelector(
  "#password .successMessage"
);
let passwordMinFailElement = document.querySelector(
  "#password .minFailMessage"
);
let passwordMaxFailElement = document.querySelector(
  "#password .maxFailMessage"
);
let passwordContentFailElement = document.querySelector(
  "#password .contentFailMessage"
);

let passwordValidInputElement = document.getElementById("userPasswordValid");
let passwordValidSuccessElement = document.querySelector(
  "#passwordValid .successMessage"
);
let passwordValidFailElement = document.querySelector(
  "#passwordValid .failMessage"
);

function validEmail(str) {
  // T/F 반환 - match는 [ 문자열.match(확인패턴) ] 형태로 사용
  // tf 반환이 아니었네... 해당 문자열 반환하느라 안됐구나...
  return emailPattern.test(str);
}

function validPassword(str) {
  // T/F 반환 - test는 [ 확인패턴.test(문자열) ] 형태로 사용
  // 정규표현식의 마지막 {최소, 최대} 안채우면 안되는듯?
  return /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{4,12}$/.test(str);
}

function isMatch(password1, password2) {
  return password1 === password2;
}

membershipForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //이름
  if (nameInputElement.value.length === 0) {
    nameSuccessElement.classList.add("hide");
    nameFailElement.classList.remove("hide");
    nameCheck = 0;
  } else {
    nameSuccessElement.classList.remove("hide");
    nameFailElement.classList.add("hide");
    nameCheck = 1;
  }

  //이메일
  if (validEmail(emailInputElement.value) === true) {
    emailSuccessElement.classList.remove("hide");
    emailFailElement.classList.add("hide");
    emailCheck = 1;
  } else {
    emailSuccessElement.classList.add("hide");
    emailFailElement.classList.remove("hide");
    emailCheck = 0;
  }

  // 나이
  if (
    isNaN(ageInputElement.value) === true ||
    ageInputElement.value.length === 0
  ) {
    ageSuccessElement.classList.add("hide");
    ageNumFailElement.classList.remove("hide");
    ageFractionFailElement.classList.add("hide");
    ageMinusFailElement.classList.add("hide");
    ageMinFailElement.classList.add("hide");
    ageCheck = 0;
  } else if (parseInt(ageInputElement.value) < 0) {
    ageSuccessElement.classList.add("hide");
    ageNumFailElement.classList.add("hide");
    ageFractionFailElement.classList.add("hide");
    ageMinusFailElement.classList.remove("hide");
    ageMinFailElement.classList.add("hide");
    ageCheck = 0;
  } else if (parseInt(ageInputElement.value) < 19) {
    ageSuccessElement.classList.add("hide");
    ageNumFailElement.classList.add("hide");
    ageFractionFailElement.classList.add("hide");
    ageMinusFailElement.classList.add("hide");
    ageMinFailElement.classList.remove("hide");
    ageCheck = 0;
  } else if (Number.isInteger(+ageInputElement.value) === false) {
    ageSuccessElement.classList.add("hide");
    ageNumFailElement.classList.add("hide");
    ageFractionFailElement.classList.remove("hide");
    ageMinusFailElement.classList.add("hide");
    ageMinFailElement.classList.add("hide");
    ageCheck = 0;
  } else {
    ageSuccessElement.classList.remove("hide");
    ageNumFailElement.classList.add("hide");
    ageFractionFailElement.classList.add("hide");
    ageMinusFailElement.classList.add("hide");
    ageMinFailElement.classList.add("hide");
    ageCheck = 1;
  }

  // 비밀번호
  if (passwordInputElement.value.length < 4) {
    passwordSuccessElement.classList.add("hide");
    passwordMinFailElement.classList.remove("hide");
    passwordMaxFailElement.classList.add("hide");
    passwordContentFailElement.classList.add("hide");
    passwordCheck = 0;
  } else if (passwordInputElement.value.length > 12) {
    passwordSuccessElement.classList.add("hide");
    passwordMinFailElement.classList.add("hide");
    passwordMaxFailElement.classList.remove("hide");
    passwordContentFailElement.classList.add("hide");
    passwordCheck = 0;
  } else if (validPassword(passwordInputElement.value) === false) {
    passwordSuccessElement.classList.add("hide");
    passwordMinFailElement.classList.add("hide");
    passwordMaxFailElement.classList.add("hide");
    passwordContentFailElement.classList.remove("hide");
    passwordCheck = 0;
  } else {
    passwordSuccessElement.classList.remove("hide");
    passwordMinFailElement.classList.add("hide");
    passwordMaxFailElement.classList.add("hide");
    passwordContentFailElement.classList.add("hide");
    passwordCheck = 1;
  }

  // 비번확인
  if (
    isMatch(passwordInputElement.value, passwordValidInputElement.value) ===
      false ||
    passwordInputElement.value.length === 0
  ) {
    passwordValidSuccessElement.classList.add("hide");
    passwordValidFailElement.classList.remove("hide");
    passwordValidCheck = 0;
  } else {
    passwordValidSuccessElement.classList.remove("hide");
    passwordValidFailElement.classList.add("hide");
    passwordValidCheck = 1;
  }

  // 모두 성공시 모달창 생성
  if (
    nameCheck + emailCheck + ageCheck + passwordCheck + passwordValidCheck ===
    5
  ) {
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
