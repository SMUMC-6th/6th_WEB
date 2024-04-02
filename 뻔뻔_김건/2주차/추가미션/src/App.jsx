import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
      setShowContent(!showContent);
  };

  return (
    <div>
      <Navbar toggleContent={toggleContent} showContent={showContent} />
      <Content showContent={showContent} />
      <Footer></Footer>
    </div>
  );
}

export default App;
