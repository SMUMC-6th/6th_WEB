import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoLayout from "./layout/TodoLayout";
import { MainPage, TrendsPage, SignUpPage, LoginPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "trends",
        element: <TrendsPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
