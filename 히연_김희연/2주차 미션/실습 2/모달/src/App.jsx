import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="main">
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button className="open" onClick={() => setVisible(true)}>
        버튼 열기
      </button>
      {visible && <Modal setVisible={setVisible} />}
    </div>
  );
};

export default App;
