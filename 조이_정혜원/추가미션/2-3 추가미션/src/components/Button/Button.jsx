import { ButtonBox } from "./Button.style";

const Button = ({ color, buttonRef, onclick }) => {
  return (
    <ButtonBox ref={buttonRef} color={color} onClick={onclick}>
      클릭
    </ButtonBox>
  );
};

export default Button;
