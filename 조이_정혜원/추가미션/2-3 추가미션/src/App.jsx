import { useRef, useState } from "react";
import "./App.style.js";
import { Container } from "./App.style.js";
import { getRandomColor } from "./utils/getRandomColor";
import Button from "./components/Button/Button.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
  // ㅎㅎ 이렇게 각각 다 만드는게.. 맞는지.. 모르겠습니다 ..
  const containerRef = useRef();
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const buttonRef3 = useRef();
  const buttonRef4 = useRef();

  const [openModal, setOpenModal] = useState(false);

  const openModel = () => {
    console.log(buttonRef1.current);
    setOpenModal((prev) => !prev);
  };

  const colorChange = (buttonRef) => {
    buttonRef.current.style.backgroundColor = getRandomColor();
    containerRef.current.style.backgroundColor = getRandomColor();
  };

  return (
    <>
      <Container ref={containerRef}>
        <Button color={"red"} buttonRef={buttonRef1} onclick={openModel} />
        <Button
          color={"pink"}
          buttonRef={buttonRef2}
          onclick={() => colorChange(buttonRef2)}
        />
        <Button
          color={"orange"}
          buttonRef={buttonRef3}
          onclick={() => colorChange(buttonRef3)}
        />
        <Button
          color={"yellow"}
          buttonRef={buttonRef4}
          onclick={() => colorChange(buttonRef4)}
        />
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
    </>
  );
}

export default App;
