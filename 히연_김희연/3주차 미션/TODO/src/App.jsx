import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoLayout from "./layout/TodoLayout";
import Main from "./pages/MainPage/Main";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
