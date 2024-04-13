import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

// props를 줄때는 props이름 = {props로 줄 객체} 로 주기 

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (() => {
    setIsOpen(true);
  });

  const handleClose = (() => {
    setIsOpen(false);
  });

  // modal에 주는 함수는 닫기버튼에 달거고, 버튼에 주는 함수는 여는 버튼(첫버튼)에 줄거임
  return(
    <div className='wrapper'>
      {(isOpen)&&<Modal onClick={handleClose}/>}
      <Button func={handleOpen}/>
    </div>
  )
}

export default App;