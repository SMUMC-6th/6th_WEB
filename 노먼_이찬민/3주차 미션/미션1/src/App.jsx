import React from "react";
// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 리액트 라우터 DOM 사용을 위해서
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainPage from "./Pages/MainPage.jsx";
import PopularPage from "./Pages/PopularPage";
import TopRatedPage from "./Pages/TopRatedPage";
import UpComingPage from "./Pages/UpComingpage";
import NowPlayingPage from "./Pages/NowPlayingPage";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/NowPlayingPage/" element={<NowPlayingPage />} />
          <Route path="/PopularPage/" element={<PopularPage />} />
          <Route path="/TopRatedPage/" element={<TopRatedPage />} />
          <Route path="/UpcommingPage/" element={<UpComingPage />} />
          <Route path="/DetailPage/" element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
