import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import MainPage from "./pages/Main/MainPage";
import PopularPage from "./pages/Popular/PopularPage";
import TopRatedPage from "./pages/TopRated/TopRatedPage";
import NowPlayingPage from "./pages/NowPlaying/NowPlayingPage";
import UpComingPage from "./pages/UpComing/UpComingPage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
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
        path: "/movie/:movieName",
        element: <MovieDetailPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
