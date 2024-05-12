import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRates from "./pages/TopRates";
import UpComing from "./pages/UpComing";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Loginvalide from "./pages/login";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "Popular", element: <Popular /> },
      { path: "NowPlaying", element: <NowPlaying /> },
      { path: "TopRates", element: <TopRates /> },
      { path: "UpComing", element: <UpComing /> },
      { path: "MovieDetail/:movieId", element: <MovieDetail />},
      { path: "SignUp", element: <SignUp /> },
      { path: "login", element: <Loginvalide /> }
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

export default App;