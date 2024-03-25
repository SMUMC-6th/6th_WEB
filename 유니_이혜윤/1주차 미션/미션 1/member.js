document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.loginBox');
  let valid = false;
  
  form.addEventListener('submit', function(event) {  // submit시에 호출될 함수 받아
      event.preventDefault(); // 폼의 제출을 방지
      valid = true;
      
      // 입력 값
      const inputUsername = document.getElementById('inputUsername');
      const inputEmail = document.getElementById('inputEmail');
      const inputAge = document.getElementById('inputAge');
      const inputPassword = document.getElementById('inputPassword');
      const inputPasswordRetype = document.getElementById('inputPasswordRetype');
      
      // 이름
      if(inputUsername.value.trim() === '') {
          document.querySelector('.failureMessage').classList.remove('hide');
      } else {
          document.querySelector('.successMessage').classList.remove('hide');
          document.querySelector('.failureMessage').classList.add('hide');
      }
      
      // 이메일
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
          document.querySelector('.successEmail').classList.remove('hide');
          document.querySelector('.failureEmail').classList.add('hide');
      } else {
          document.querySelector('.failureEmail').classList.remove('hide');
          valid = false;
      }
      
      // 나이
      if(Number(inputAge.value) >= 19 && inputAge.value === parseInt(inputAge.value, 10).toString()) {
          document.querySelector('.successAge').classList.remove('hide');
          document.querySelector('.failureAge').classList.add('hide');
      } else {
          document.querySelector('.failureAge').classList.remove('hide');
          document.querySelector('.successAge').classList.add('hide');
          if(Number(inputAge.value) < 19 && inputAge.value === parseInt(inputAge.value, 10).toString()) {
            document.querySelector('.limitAge').classList.remove('hide');  // 오류
        }else {
            document.querySelector('.limitAge').classList.add('hide');
        }
      }
      
      // 비밀번호
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{4,12}$/;  // 영어, 특수문자, 숫자 조합 4~12자리
      if(passwordRegex.test(inputPassword.value)) {
          document.querySelector('.successPassword').classList.remove('hide');
          document.querySelectorAll('.failurePassword, .failurePassword-2').forEach(el => el.classList.add('hide')); // failurePassword, failurePassword-2 클래스 모든 요소 숨겨줌
      } else {
          document.querySelector('.successPassword').classList.add('hide');
          valid = false;
          if(inputPassword.value.length < 4) {
              document.querySelector('.failurePassword').classList.remove('hide');
          } else if(inputPassword.value.length > 12) {
              document.querySelector('.failurePassword-2').classList.remove('hide');
          }
      }
      
      // 비밀번호 일치
      if(inputPassword.value === inputPasswordRetype.value && inputPassword.value.length >= 4 && inputPassword.value.length <= 12) {
          document.querySelector('.matchPassword').classList.remove('hide');
          document.querySelector('.mismatchPassword').classList.add('hide');
      } else {
          document.querySelector('.mismatchPassword').classList.remove('hide');
          document.querySelector('.matchPassword').classList.add('hide');
      }

});

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener('click', function() { // click하면 함수실행
        const modal = document.querySelector(".modalContentBox");
        if(valid) { // 유효성 검사를 통과하면 모달 표시
            modal.style.display = "flex"; // css 
        }
    });

    const close = document.getElementById("close");
    close.onclick = () => {
        const modal = document.querySelector(".modalContentBox");
        modal.style.display = "none";
    };

});
