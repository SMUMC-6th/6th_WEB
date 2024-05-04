import AppLayout from "../Layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/Main/MainPage";
import NowPlayingPage from "../Pages/NowPlayingPage";
import PopularPage from "../Pages/PopularPage";
import TopRatedPage from "../Pages/TopRatedPage";
import UpComingPage from "../Pages/UpComingpage";
import DetailPage from "../Pages/Detail/DetailPage";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import LoginPage from "../Pages/Login/LoginPage";

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        label: "main",
      },
      {
        path: "/popular",
        element: <PopularPage />,
        label: "popular",
      },
      {
        path: "/nowPlaying",
        element: <NowPlayingPage />,
        label: "nowPlaying",
      },
      {
        path: "/topRated",
        element: <TopRatedPage />,
        label: "topRated",
      },
      {
        path: "/upcoming",
        element: <UpComingPage />,
        label: "upcoming",
      },
      {
        path: "/movie/:EngTitle",
        element: <DetailPage />,
        label: "detail",
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
        label: "signup",
      },
      {
        path: "/login",
        element: <LoginPage />,
        label: "login",
      },
      {
        path: "/*",
        element: <NotFoundPage />,
        label: "notFound",
      },
    ],
    errorElement: <NotFoundPage />,
  },
];

export default Router;
