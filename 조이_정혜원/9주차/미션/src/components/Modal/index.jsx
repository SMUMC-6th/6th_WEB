import * as S from "./Modal.style";
import Button from "../Button";

const Modal = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h2>담아두신 모든 음반을 삭제하시겠습니까?</h2>
        <S.ButtonWrapper>
          <Button text={"네"} cartclear={true} />
          <Button text={"아니요"} no={true} />
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Modal;
