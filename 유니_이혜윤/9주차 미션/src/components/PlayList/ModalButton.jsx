import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { closeModal } from "../../redux/modalSlice";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;

  button {
    border: none;
    border-radius: 50px;
    cursor: pointer;
    padding: 10px;
  }
`;

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <Button>
      <button type="button" onClick={() => {
        dispatch(clearCart());
        dispatch(closeModal());
      }}>
        네
      </button>
      <button type="button" onClick={() => {
        dispatch(closeModal());
      }}>
        아니요
      </button>
    </Button>
  )
}

export default ModalButton;