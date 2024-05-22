const nameValid = /^[a-zA-Zㄱ-ㅎ가-힣0-9]+$/;
const idValid = /^[a-zA-Z0-9]+$/;
const emailValid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const pwdValid = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,12}$/;

export { nameValid, idValid, emailValid, pwdValid };
