import Navbar from "./components/Navbar/Navbar"
import PlayList from "./components/PlayList/PlayList"
import Modal from "./components/PlayList/Modal"
import { useSelector } from "react-redux"


function App() {
  const {isOpen} = useSelector((store) => store.modal);

  return (
    <>
      <div>
        <Navbar />
        <PlayList />
        {isOpen &&
          <Modal>
            <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
          </Modal>}
      </div>
    </>
  )
}

export default App
