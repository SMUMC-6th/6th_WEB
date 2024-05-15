import AppLayout from "../Layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";

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
    ],
  },
];

export default Router;
