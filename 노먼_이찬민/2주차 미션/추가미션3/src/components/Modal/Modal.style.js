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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: main;
  border-radius: 10px;
  background-color: rgb(192, 192, 192);
  border: 2px solid rgb(192, 192, 192);
`

const TextWrapper = styled.p`
  font-size: 30px;
  font-weight: bolder;
`


const ModalCloseButton = styled.button`
  grid-area: button;
  background-color: aliceblue;
  border-radius: 4px;
  width: 30%;
  height: 20%;
`

export { ModalContainer , ModalContent, TextWrapper, ModalCloseButton };