import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css"
import Navbar from './Navbar'
import MainPage from './pages/MainPage'
import PopularPage from './pages/PopularPage'
import NowPlayingPage from './pages/NowPlayingPage'
import TopRatedPage from './pages/TopRatedPage'
import UpcomingPage from './pages/Upcoming'
import Footer from './Footer'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/popular" element={<PopularPage />}></Route>
            <Route path="/nowplay" element={<NowPlayingPage />}></Route>
            <Route path="/toprated" element={<TopRatedPage />}></Route>
            <Route path="/upcoming" element={<UpcomingPage />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  )
}

export default App
