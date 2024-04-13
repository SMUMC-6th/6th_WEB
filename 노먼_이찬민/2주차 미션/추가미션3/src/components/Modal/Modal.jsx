import * as S from './Modal.style';

// props로 전달한 거 자식에서 받을 때 속성 이름 똑같이 해주기!!
const Modal = ({onClick}) =>{

  return (
    <S.ModalContainer>
      <S.ModalContent>
        {/* <p>안녕하세요!</p> */}
        <S.TextWrapper>안녕하세요!!</S.TextWrapper>
        <S.TextWrapper>이것은 엄청난 모달!!!</S.TextWrapper>
      </S.ModalContent>
      <S.ModalCloseButton onClick={onClick}>닫기</S.ModalCloseButton>
    </S.ModalContainer>
    
  )
}

export default Modal;