import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

// props를 줄때는 props이름 = {props로 줄 객체} 로 주기 

function App() {
  const [isContentHide,SetIsContentHide] = useState(false);

  const toggleHide = () => {
    // isContentHide가 true면 false로 false면 true로 바꿈
    // isContentHide? SetIsContentHide(false) : SetIsContentHide(true); 
    SetIsContentHide(!isContentHide);
  }

  // isContentHide가 true면 Content 드러내기 (content에 props으로 준 함수가 onclick때 실행되면 바뀜)
  return(
    <div className='wrapper'> 
      <Navbar func={toggleHide}/>
      {isContentHide && <Content/>} 
      <Footer/>
    </div>
  )
}

export default App;