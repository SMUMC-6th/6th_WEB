import * as S from './Modal.style';

const Modal = () =>{

  return (
    <S.ModalContainer>
      <S.ModalContent>안녕하세요! 이것은 엄청난 모달입니다!!</S.ModalContent>
      <S.ModalCloseButton>닫기</S.ModalCloseButton>
    </S.ModalContainer>
  )
}

export default Modal;