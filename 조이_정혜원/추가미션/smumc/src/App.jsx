import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage, ProjectPage, NoticePage, MemberPage, MemberDetail } from "./pages/index";
import AppLayout from "./layout/AppLayout";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

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
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "notices",
        element: <NoticePage />,
      },
      {
        path: "members",
        element: <MemberPage />,
      },
      {
        path: "members/:id",
        element: <MemberDetail />,
      },
    ],
  },
]);

function App() {
  const { nowTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={nowTheme ? theme.darkTheme : theme.lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
