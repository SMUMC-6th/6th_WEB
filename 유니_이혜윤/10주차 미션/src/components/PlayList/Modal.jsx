import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import ModalButton from "./ModalButton"

const Modal = ({children}) => {
  const dispatch = useDispatch();

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  return(
    <div onClick={handleClickOutside} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        {children}
        <ModalButton />
      </div>
    </div>
  )
}

export default Modal;
