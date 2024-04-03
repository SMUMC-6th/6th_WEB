// modal
const modal = document.querySelector(".modal-wrapper");
const closeBtn = document.getElementById("modal-close-btn");
const signUpForm = document.getElementById("signup-form");
//modal 열기
const openModal = () => {
  modal.style.display = "grid";
};
//modal 닫기
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  signUpForm.submit();
});
// 회원가입
const signUpBtn = document.getElementById("signup-btn");
const signUp = () => {
  const pwd = document.getElementById("pwd-input").value.trim();
  const confirmPwd = document.getElementById("confirm-pwd-input").value.trim();
  const pwdValid = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,12}$/;
  let textPwd = document.getElementById("alert-text-pwd");
  let textConfirmPwd = document.getElementById("alert-text-confirm-pwd");
  let completeCnt = 0;
  checkName();
  checkEmail();
  checkAge();
  checkPwd();
  checkConfirmPwd();
//5조건을 모두 만족할때만 열림
  if (completeCnt === 5) {
    openModal();
  }
  function checkName() {
    const username = document.getElementById("name-input").value.trim();
    const nameValid = /^[a-zA-Zㄱ-ㅎ가-힣0-9]+$/;
    let textName = document.getElementById("alert-text-name");
    textName.style.display = "block";
    textName.style.color = "red";

      // 이름이 입력되지 않은 경우
      if (nameValid.test(username)) {
        textName.style.color = "green";
        textName.innerText = "멋진 이름이네요!";
        completeCnt++;
      } else {
        if (username === 0) textName.innerText = "필수 입력 항목입니다!";
        else textName.innerText = "문자열만 입력해주세요!";
      }
    }

  //이메일
 function checkEmail() {
    const email = document.getElementById("email-input").value.trim();
    const emailValid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; // \d === 0-9
    let textEmail = document.getElementById("alert-text-email");
    textEmail.style.display = "block";
    textEmail.style.color = "red";
    //이메일 조건
    if (emailValid.test(email)) {
      textEmail.style.color = "green";
      textEmail.innerText = "올바른 이메일 형식입니다!";
      completeCnt++;
    //아무것도 입력하지 않은 경우
    } else if (email.length === 0) {
      textEmail.textContent = '올바른 이메일 형식이 아닙니다!';
    }
    // 이메일이 문자열이 아닌 경우
      else if (typeof email !== 'string') {
      textEmail.textContent = '올바른 이메일 형식이 아닙니다!';
    }
    // 이메일 형식이 맞지 않는 경우
      else {
      textEmail.textContent = '올바른 이메일 형식이 아닙니다!';
    }
  }
  
//나이
  function checkAge() {
    const age = document.getElementById("age-input").value.trim();
    const ageValid = /^[0-9\.-]+$/;
    let textAge = document.getElementById("alert-text-age");
    textAge.style.display = "block";
    textAge.style.color = "red";

    if (!ageValid.test(age)) {
       // 나이가 입력되지 않은 경우
      if (age === '') {textAge.innerText = "나이를 입력해주세요!";
      } else typeof ageInput.value.trim() !== 'string';{
        textAge.innerText = '나이는 숫자형식이어야 합니다!';
      }
      } else {
        if (age < 0) {
          textAge.innerText = '나이는 음수가 될 수 없습니다.';
        } else if (age % 1 !== 0) {
          textAge.innerText = '나이는 소수가 될 수 없습니다.';
        } else if (Number(age) < 19) {
          textAge.innerText = '미성년자는 가입할 수 없습니다.';
        } else {
          textAge.style.color = 'green';
          textAge.innerText = '올바른 나이 형식입니다!';
          completeCnt++;
        }
      }
  }

  function checkPwd() {
    textPwd.style.display = "block";
    textPwd.style.color = "red";

    if (pwdValid.test(pwd)) {
      textPwd.style.color = "green";
      textPwd.innerText = "올바른 비밀번호입니다.";
      completeCnt++;
    } else {
      if (pwd.length < 4) {
        textPwd.innerText = "비밀번호는 최소 4자리 이상이어야 합니다. ";
      } else if (pwd.length > 12) {
        textPwd.innerText = "비밀번호는 최대 12자리까지 가능합니다.";
      } else {
        textPwd.innerText =
          "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다. ";
      }
    }
  }

  function checkConfirmPwd() {
    textConfirmPwd.style.display = "block";
    textConfirmPwd.style.color = "red";
   // 비밀번호 확인
     if (pwd !== confirmPwd) {
      textConfirmPwd.textContent = '비밀번호가 일치하지 않습니다.';
      // 비밀번호 확인이 일치하지 않으면 더 이상 진행하지 않음
    } else {
      if (pwdValid.test(confirmPwd)) {
        textConfirmPwd.style.color = "green";
        textConfirmPwd.innerText = "비밀번호가 일치합니다!";
        completeCnt++;
      } else {
        textConfirmPwd.innerText =
          "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
      }
    }
  }
};
signUpBtn.addEventListener("click", signUp);
  










