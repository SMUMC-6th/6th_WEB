import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MainPage from './pages/MainPage/MainPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PopularPage from './pages/PopularPage/PopularPage'
import NowPlayingPage from './pages/NowPlayingPage/NowPlayingPage'
import TopRatedPage from './pages/TopRatedPage/TopRatedPage'
import UpcomingPage from './pages/Upcoming/UpcomingPage'
import MovieDetail from './pages/MovieDetailPage/MovieDetailPage'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NowPlayingPage/NowPlayingPage'

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
      { path: "signup", element: <SignUpPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "popular", element: <PopularPage /> },
      { path: "nowplay", element: <NowPlayingPage /> },
      { path: "toprated", element: <TopRatedPage /> },
      { path: "upcoming", element: <UpcomingPage /> },
    ],
    errorElement : <NotFound />,
  },
  { path: "movie/:id", element: <MovieDetail />},
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App