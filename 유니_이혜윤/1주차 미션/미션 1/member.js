let inputUsername = document.querySelector("#username");
let successMessage = document.querySelector(".success-message");
let failureMessage = document.querySelector(".failure-message");

let inputEmail = document.querySelector("#useremail");
let successEmail = document.querySelector(".successEmail");
let failureEmail = document.querySelector(".failureEmail");

let inputAge = document.querySelector("#age");
let successAge = document.querySelector(".successAge");
let failureAge = document.querySelector(".failureAge");

let mismatchPassword = document.querySelector(".mismatchPassword");
let failurePassword = document.querySelector(".failurePassword");

let requiredMessage = document.querySelector(".required-message")

inputUsername.onkeyup = function() {
  if(inputUsername.value.length == 0) {
    successMessage.classList.add('hide');  // 성공메세지 숨김
    failureMessage.classList.remove('hide');
  }
  else {
    successMessage.classList.remove('hide'); // 성공메세지 보여줌
    failureMessage.classList.add('hide');
  }
}


function validatePassword() {
	var inputPassword = document.getElementById('Password').value;
	var inputPasswordRetype = document.getElementById('checkPassword').value;
	var resultDiv = document.getElementById('result');

	var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;

	if (passwordRegex.test(inputPassword)) {
    failurePassword.classList.add('hide');

		if (inputPassword === inputPasswordRetype) {
			mismatchPassword.classList.add('hide');
		}else{
			mismatchPassword.classList.remove('hide');
		}
	}else{
		failurePassword.classList.remove('hide');
	}
}



function alertMessage () {

}

/*
button.onclick = function() {
  if(inputUsername.value !== "" && inputEmail.value !== ""
  && inputAge.value !== "" && inputPassword.value !== ""
  && inputPasswordRetype.value !== "")
    // 조건 다 맞으면 모달 띄우기??
  else {
    failureMessage.classList.remove('hide');
    failurePassword.classList.remove('hide');
    mismatchPassword.classList.remove('hide');
  }
}
*/
