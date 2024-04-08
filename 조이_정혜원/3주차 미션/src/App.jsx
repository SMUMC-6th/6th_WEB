import AppLayout from "./layout/AppLayout";
import MainPage from "./pages/MainPage/MainPage";
import PopularPage from "./pages/PopularPage/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage/TopRatedPage";
import UpcomingPage from "./pages/UpComingPage/UpcomingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "popular",
        element: <PopularPage />,
      },
      {
        path: "now",
        element: <NowPlayingPage />,
      },
      {
        path: "top-rated",
        element: <TopRatedPage />,
      },
      {
        path: "up-coming",
        element: <UpcomingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
