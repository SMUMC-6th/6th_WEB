import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoLayout from "./layout/TodoLayout";
import Main from "./pages/MainPage/Main";
import Trends from "./pages/TrendsPage/Trends";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },

  {
    path: "/trends",
    children: [
      {
        index: true,
        element: <Trends />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
