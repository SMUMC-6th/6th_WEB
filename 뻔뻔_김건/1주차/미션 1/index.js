let nameCheck = false
let idCheck = false
let ageCheck = false
let emailadressCheck = false
let pwCheck = false
let pwCheckCheck = false

function nameFunction(){
    let name = document.getElementById("name").value
    let nameError = document.getElementById("nameError")
    if (name.trim() === "") {
      nameError.classList.remove("success")
      nameError.classList.add('error')
      nameError.innerHTML = '필수 입력 항목입니다.'
      nameCheck = false
    } else {
      nameError.classList.remove("error")
      nameError.classList.add('success')
      nameError.innerHTML = "멋진 이름이네요!"
      nameCheck = true
    }
    console.log("이름 검증: check =", nameCheck)
    updateBtnColor()
}

function ageFunction(){
  let age = document.getElementById("age").value
  let ageError = document.getElementById("ageError")

  if (age.trim() === "") {
    ageError.classList.remove("success")
    ageError.classList.add('error')
    ageError.innerHTML = '나이를 입력해주세요!'
    ageCheck = false
  }

  else if(isNaN(age)){
    ageError.classList.remove("success")
    ageError.classList.add('error')
    ageError.innerHTML = '나이는 숫자 형식이어야 합니다!'
    ageCheck = false
  } 
  
  else if(age < 0){
    ageError.classList.remove("success")
    ageError.classList.add('error')
    ageError.innerHTML = '나이는 음수가 될 수 없습니다!'
    ageCheck = false
  } 
  
  else if(age % 1 !== 0){
    ageError.classList.remove("success")
    ageError.classList.add('error')
    ageError.innerHTML = '나이는 소수가 될 수 없습니다!'
    ageCheck = false
  } 

  else if(age <= 19){
    ageError.classList.remove("success")
    ageError.classList.add('error')
    ageError.innerHTML = '미성년자는 가입할 수 없습니다!'
    ageCheck = false
  } 
  
  else {
    ageError.classList.remove("error")
    ageError.classList.add('success')
    ageError.innerHTML = "올바른 나이 형식입니다!"
    ageCheck = true
  }
  console.log("나이 검증: check =", ageCheck)
  updateBtnColor();
}

function emailadressFunction() {
  let emailadress = document.getElementById("emailadress").value
  let emailadressError = document.getElementById("emailadressError")
  let valid_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

  if (!valid_email.test(emailadress)) {
    passwordError.classList.remove("success")
    emailadressError.classList.add('error')
    emailadressError.innerHTML = '올바른 이메일 형식이 아닙니다!'
    emailadressCheck = false
  } 
  else {
    emailadressError.classList.remove("error")
    emailadressError.classList.add('success')
    emailadressError.innerHTML = "올바른 메일 형식입니다."
    emailadressCheck = true
  }
  console.log("이메일 검증: check =", emailadressCheck)
  updateBtnColor()
}

function pwFunction() {
  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("passwordError");
  updateBtnColor()
  
  let text = /[a-zA-Z]/.test(password);
  let num = /\d/.test(password);
  let special = /[ `!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]/.test(password);

  if (password.length < 4) {
    passwordError.classList.remove("success");
    passwordError.classList.add('error');
    passwordError.innerHTML = '비밀번호는 최소 4자리 이상이어야 합니다.';
    pwCheck = false;
  } else if (password.length > 12) {
    passwordError.classList.remove("success");
    passwordError.classList.add('error');
    passwordError.innerHTML = '비밀번호는 최대 12자리까지 가능합니다.';
    pwCheck = false;
  } else if (!text || !num || !special) {
    passwordError.classList.remove("success");
    passwordError.classList.add('error');
    passwordError.innerHTML = '비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.';
    pwCheck = false;
  } else {
    passwordError.classList.remove("error");
    passwordError.classList.add('success');
    passwordError.innerHTML = "올바른 비밀번호입니다!";
    pwCheck = true;
  }
  console.log("비밀번호 검증: check =", pwCheck);
  updateBtnColor()
}



function pwcheckFunction() {
  let password = document.getElementById("password").value;
  let passwordcheck = document.getElementById("passwordcheck").value;
  let passwordcheckError = document.getElementById("passwordcheckError")

  if (passwordcheck.trim() === "" || password !== passwordcheck) {
    passwordError.classList.remove("success");
    passwordcheckError.classList.add('error');
    passwordcheckError.innerHTML = '비밀번호가 일치하지 않습니다.';
    pwCheckCheck = false
  } 
  else {
    passwordcheckError.classList.remove("error")
    passwordcheckError.classList.add('success')
    passwordcheckError.innerHTML = "비밀번호가 일치합니다."
    pwCheckCheck = true
  }
  console.log("비밀번호 확인 검증: check =", pwCheckCheck)
  updateBtnColor()
}

function updateBtnColor(){
  const submitBtn= document.getElementById('submitbox')
  if((nameCheck&&ageCheck&&emailadressCheck&&pwCheck&&pwCheckCheck)==true){
    submitBtn.classList.add('submitbox_success')
  }
  else{
    submitBtn.classList.remove('submitbox_success')
  }
}

function validateAndSubmit() {
  nameFunction()
  ageFunction()
  emailadressFunction()
  pwFunction()
  pwcheckFunction()
  
  if ((nameCheck&&ageCheck&&emailadressCheck&&pwCheck&&pwCheckCheck)==true) {
    modalOpen()
  } 
}

function modalOpen(){
  document.querySelector('.modal').style.display = 'block'
  document.querySelector('.modalbody').style.display = 'block'
}

const closeBtn = document.querySelector('.closeBtn')
closeBtn.addEventListener('click',modalClose)

function modalClose(){
  document.querySelector('.modal').style.display = 'none'
  document.querySelector('.modalbody').style.display = 'none'
}

//event prevent dafault
//form action에서 #으로 처리
//trim도 공백 사이에 ''를 표시해주면 좋다.
//cascading
//disabled 속성으로 요청을 무조건 막기
//display flex 
//display:flex;
//flex-direction:row;
//justify-content
//align-items : 반대축
//* {
//  margin : 0;
//  box-sizing : border-box;
//}
///white-space: nowrap
//text-overflow: ellipsis
//input.focus()
//item.scrollintoview 라는게 있다.
//setattribute 를 알아보기
//textcontent와 innerHtml의 차이 확인
//cloneNode 깊은 복사와 얕은 복사의 차이를 알기
//깊은 복사는 다 복사한다
//