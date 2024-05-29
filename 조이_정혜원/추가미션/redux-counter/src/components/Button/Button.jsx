import * as S from "./Button.style";

const Button = ({ text, onClick }) => {
  return <S.Container onClick={onClick}>{text}</S.Container>;
};

export default Button;
