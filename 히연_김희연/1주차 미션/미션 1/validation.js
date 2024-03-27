const modal = document.querySelector(".modal-wrapper");
const closeBtn = document.getElementById("modal-close-btn");
const signUpForm = document.getElementById("signup-form");
const signUpBtn = document.getElementById("signup-btn");

const validateSignUpForm = () => {
  const username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const password = document.getElementById("pwd").value.trim();
  const confirmPassword = document.getElementById("confirm-pwd").value.trim();

  let isValid = true;

  isValid = validateUsername(username) && isValid;
  isValid = validateEmail(email) && isValid;
  isValid = validateAge(age) && isValid;
  isValid = validatePassword(password) && isValid;
  isValid = validateConfirmPassword(password, confirmPassword) && isValid;

  return isValid;
};

const validateUsername = (username) => {
  const nameValid = /^[a-zA-Zㄱ-ㅎ가-힣0-9]+$/;
  const textName = document.getElementById("alert-name");

  textName.style.display = "block";

  if (nameValid.test(username)) {
    textName.style.color = "green";
    textName.innerText = "멋진 이름이네요!";
    return true;
  } else {
    textName.style.color = "red";
    textName.innerText = username
      ? "문자열만 입력해주세요!"
      : "필수 입력 항목입니다!";
    return false;
  }
};

const validateEmail = (email) => {
  const emailValid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const textEmail = document.getElementById("alert-email");

  textEmail.style.display = "block";

  if (emailValid.test(email)) {
    textEmail.style.color = "green";
    textEmail.innerText = "올바른 이메일 형식입니다!";
    return true;
  } else {
    textEmail.style.color = "red";
    textEmail.innerText = "올바른 이메일 형식이 아닙니다!";
    return false;
  }
};

const validateAge = (age) => {
  const ageValid = /^[0-9\.-]+$/;
  const textAge = document.getElementById("alert-age");

  textAge.style.display = "block";

  if (!ageValid.test(age)) {
    textAge.innerText = age
      ? "나이는 숫자 형식이어야 합니다!"
      : "나이를 입력해주세요!";
    return false;
  } else if (age.includes("-")) {
    textAge.innerText = "나이는 음수가 될 수 없습니다.";
    return false;
  } else if (age.includes(".")) {
    textAge.innerText = "나이는 소수가 될 수 없습니다.";
    return false;
  } else if (Number(age) < 19) {
    textAge.innerText = "미성년자는 가입할 수 없습니다.";
    return false;
  } else {
    textAge.style.color = "green";
    textAge.innerText = "올바른 나이 형식입니다!";
    return true;
  }
};

const validatePassword = (password) => {
  const pwdValid = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,12}$/;
  const textPwd = document.getElementById("alert-pwd");

  textPwd.style.display = "block";

  if (pwdValid.test(password)) {
    textPwd.style.color = "green";
    textPwd.innerText = "올바른 비밀번호입니다.";
    return true;
  } else {
    if (password.length <= 4) {
      textPwd.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";
    } else if (password.length >= 12) {
      textPwd.innerText = "비밀번호는 최대 12자리까지 가능합니다.";
    } else {
      textPwd.innerText =
        "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
    }
    return false;
  }
};

const validateConfirmPassword = (password, confirmPassword) => {
  const textConfirmPwd = document.getElementById("alert-confirm-pwd");

  textConfirmPwd.style.display = "block";

  if (
    password !== confirmPassword ||
    (password === "" && confirmPassword === "")
  ) {
    textConfirmPwd.innerText = "비밀번호가 일치하지 않습니다.";
    return false;
  } else if (validatePassword(confirmPassword)) {
    textConfirmPwd.style.color = "green";
    textConfirmPwd.innerText = "비밀번호가 일치합니다!";
    return true;
  } else {
    textConfirmPwd.innerText =
      "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
    return false;
  }
};

signUpBtn.addEventListener("click", () => {
  if (validateSignUpForm()) {
    modal.style.display = "grid";
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  signUpForm.submit();
});
