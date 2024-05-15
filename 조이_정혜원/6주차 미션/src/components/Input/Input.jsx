import * as S from "./Input.style";

const Input = ({ errors, register, name, type, placeholder }) => {
  return (
    <>
      <input {...register(name)} type={type} placeholder={placeholder} />
      {errors && <S.ErrorMsg>{errors[name]?.message}</S.ErrorMsg>}
    </>
  );
};

export default Input;
