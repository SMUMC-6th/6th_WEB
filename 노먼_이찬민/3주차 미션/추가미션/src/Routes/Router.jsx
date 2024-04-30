import AppLayout from "../Layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import TrendsPage from "../Pages/Trend/TrendsPage";

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
        path: "/trends",
        element: <TrendsPage />,
        label: "trends",
      },
    ],
  },
];

export default Router;
