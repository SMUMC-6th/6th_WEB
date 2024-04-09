import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"
import Navbar from './Navbar'
import MainPage from './pages/MainPage'
import PopularPage from './pages/PopularPage'
import NowPlayingPage from './pages/NowPlayingPage'
import TopRatedPage from './pages/TopRatedPage'
import UpcomingPage from './pages/Upcoming'
import Footer from './Footer'

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/popular", element: <PopularPage /> },
  { path: "/nowplay", element: <NowPlayingPage /> },
  { path: "/toprated", element: <TopRatedPage /> },
  { path: "/upcoming", element: <UpcomingPage /> },
]);


function App() {

  return (
    <div>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
    </div>
  );
}

export default App
