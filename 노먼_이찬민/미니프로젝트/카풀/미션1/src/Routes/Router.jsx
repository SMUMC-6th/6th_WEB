import AppLayout from "../Layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import BoardPage from "../Pages/BoardPage/BoardPage";

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BoardPage />,
      },
    ],
    // errorElement: <NotFoundPage />,
  },
];

export default Router;
