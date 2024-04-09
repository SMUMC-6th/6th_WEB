import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoLayout from "./layout/TodoLayout";
import MainPage from "./pages/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
