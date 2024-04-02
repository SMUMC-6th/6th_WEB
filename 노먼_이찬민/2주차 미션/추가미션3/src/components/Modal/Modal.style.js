import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 
    ". . . ."
    ". main main ."
    ". main main ."
    ". . . button"
    ;
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  font-size: 30px;
  font-weight: bolder;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 2px solid rgb(192, 192, 192);
`

const ModalCloseButton = styled.button`
  grid-area: button;
  background-color: aliceblue;
  border-radius: 4px;
  width: 10%;
  height: 5%;
`

export { ModalContainer , ModalContent, ModalCloseButton };