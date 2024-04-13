import * as M from "./Modal.style";

const Modal = ({ setOpenModal }) => {
  return (
    <M.Container>
      <M.Wrapper>
        <h2>모달입니당</h2>
        <button onClick={() => setOpenModal((prev) => !prev)}>닫기</button>
      </M.Wrapper>
    </M.Container>
  );
};

export default Modal;
