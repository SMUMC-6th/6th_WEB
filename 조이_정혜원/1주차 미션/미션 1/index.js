// modal
const modal = document.querySelector(".modal-wrapper");
const closeBtn = document.getElementById("modal-close-btn");
const signUpForm = document.getElementById("signup-form");

const openModal = () => {
  modal.style.display = "grid";
};

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  signUpForm.submit();
});

// 회원가입
const signUpBtn = document.getElementById("signup-btn");

const signUp = () => {
  // input value
  const username = document.getElementById("name-input").value.trim();
  const email = document.getElementById("email-input").value.trim();
  const age = document.getElementById("age-input").value.trim();
  const pwd = document.getElementById("pwd-input").value.trim();
  const confirmPwd = document.getElementById("confirm-pwd-input").value.trim();

  const pwdValid = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,12}$/;

  if (
    // 각 함수 유효한 값 입력 시 return 1
    checkName(username) +
      checkEmail(email) +
      checkAge(age) +
      checkPwd(pwd, pwdValid) +
      checkConfirmPwd(pwd, confirmPwd, pwdValid) ===
    5
  )
    openModal();
};

function checkName(username) {
  const nameValid = /^[a-zA-Zㄱ-ㅎ가-힣0-9]+$/;
  let textName = document.getElementById("alert-text-name");

  textName.style.display = "block";
  textName.style.color = "red";

  if (nameValid.test(username)) {
    textName.style.color = "green";
    textName.innerText = "멋진 이름이네요!";
    return 1;
  } else {
    if (username === "") textName.innerText = "필수 입력 항목입니다!";
    else textName.innerText = "문자열만 입력해주세요!";
    return 0;
  }
}

function checkEmail(email) {
  const emailValid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; // \d === 0-9
  let textEmail = document.getElementById("alert-text-email");

  textEmail.style.display = "block";
  textEmail.style.color = "red";
  if (emailValid.test(email)) {
    textEmail.style.color = "green";
    textEmail.innerText = "올바른 이메일 형식입니다!";
    return 1;
  } else {
    textEmail.innerText = "올바른 이메일 형식이 아닙니다!";
    return 0;
  }
}

function checkAge(age) {
  const ageValid = /^[0-9\.-]+$/;
  let textAge = document.getElementById("alert-text-age");

  textAge.style.display = "block";
  textAge.style.color = "red";

  if (!ageValid.test(age)) {
    if (age === "") textAge.innerText = "나이를 입력해주세요!";
    else textAge.innerText = "나이는 숫자형식이어야 합니다!";
  } else {
    if (age.includes("-")) {
      textAge.innerText = "나이는 음수가 될 수 없습니다.";
    } else if (age.includes(".")) {
      textAge.innerText = "나이는 소수가 될 수 없습니다.";
    } else if (Number(age) < 19) {
      textAge.innerText = "미성년자는 가입할 수 없습니다.";
    } else {
      textAge.style.color = "green";
      textAge.innerText = "올바른 나이 형식입니다!";
      return 1;
    }
  }
  return 0;
}

function checkPwd(pwd, pwdValid) {
  let textPwd = document.getElementById("alert-text-pwd");

  textPwd.style.display = "block";
  textPwd.style.color = "red";

  if (pwdValid.test(pwd)) {
    textPwd.style.color = "green";
    textPwd.innerText = "올바른 비밀번호입니다.";
    return 1;
  } else {
    if (pwd.length < 4) {
      textPwd.innerText = "비밀번호는 최소 4자리 이상이어야 합니다. ";
    } else if (pwd.length > 12) {
      textPwd.innerText = "비밀번호는 최대 12자리까지 가능합니다.";
    } else {
      textPwd.innerText =
        "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다. ";
    }
    return 0;
  }
}

function checkConfirmPwd(pwd, confirmPwd, pwdValid) {
  let textConfirmPwd = document.getElementById("alert-text-confirm-pwd");

  textConfirmPwd.style.display = "block";
  textConfirmPwd.style.color = "red";

  if (pwd !== confirmPwd || (pwd === "" && confirmPwd === "")) {
    textConfirmPwd.innerText = "비밀번호가 일치하지 않습니다.";
  } else {
    if (pwdValid.test(confirmPwd)) {
      textConfirmPwd.style.color = "green";
      textConfirmPwd.innerText = "비밀번호가 일치합니다!";
      return 1;
    } else {
      textConfirmPwd.innerText =
        "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
    }
  }
  return 0;
}

signUpBtn.addEventListener("click", signUp);
