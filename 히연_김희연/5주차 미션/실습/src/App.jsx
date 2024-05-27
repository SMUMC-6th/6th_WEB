import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import MainPage from "./pages/Main/MainPage";
import PopularPage from "./pages/Popular/PopularPage";
import TopRatedPage from "./pages/TopRated/TopRatedPage";
import NowPlayingPage from "./pages/NowPlaying/NowPlayingPage";
import UpComingPage from "./pages/UpComing/UpComingPage";
import MovieDetailPage from "./pages/MovieDetail/MovieDatailPage";
import NotFound from "./pages/NotFound/NotFound";
import Sign_Up from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/popular",
        element: <PopularPage />,
      },
      {
        path: "/nowplaying",
        element: <NowPlayingPage />,
      },
      {
        path: "/toprated",
        element: <TopRatedPage />,
      },
      {
        path: "/upcoming",
        element: <UpComingPage />,
      },
      {
        path: "/:category/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "/signup",
        element: <Sign_Up />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
