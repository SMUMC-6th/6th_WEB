import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

function App() {
  const [click, setClick] = useState(false);

  return (
    <>
      <Navbar click={click} setClick={setClick} />
      <Content click={click} />
      <Footer />
    </>
  )
}

export default App
