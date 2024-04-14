import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import "./App.css"
import Navbar from './Navbar'
import MainPage from './pages/MainPage'
import PopularPage from './pages/PopularPage'
import NowPlayingPage from './pages/NowPlayingPage'
import TopRatedPage from './pages/TopRatedPage'
import UpcomingPage from './pages/Upcoming'
import MovieDetail from './pages/MovieDetailPage'
import Footer from './Footer'
import NotFound from './NotFound'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      { index: true, element: <MainPage /> },
      { path: "popular", element: <PopularPage /> },
      { path: "nowplay", element: <NowPlayingPage /> },
      { path: "toprated", element: <TopRatedPage /> },
      { path: "upcoming", element: <UpcomingPage /> },
      { path: "movie/:id", element: <MovieDetail />},
    ],
    errorElement : <NotFound />,
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
