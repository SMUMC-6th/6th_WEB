import React from "react";
// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 리액트 라우터 DOM 사용을 위해서
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainPage from "./components/Pages/MainPage.jsx";
import PopularPage from "./components/Pages/PopularPage";
import TopRatedPage from "./components/Pages/TopRatedPage";
import UpComingPage from "./components/Pages/UpComingpage";
import NowPlayingPage from "./components/Pages/NowPlayingPage";
import DetailPage from "./components/Pages/DetailPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/NowPlayingPage/" element={<NowPlayingPage/>}/>
          <Route path="/PopularPage/" element={<PopularPage/>}/>
          <Route path="/TopRatedPage/" element={<TopRatedPage/>}/>
          <Route path="/UpcommingPage/" element={<UpComingPage/>}/>
          <Route path="/DetailPage/" element={<DetailPage/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
