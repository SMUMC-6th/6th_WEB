import AppLayout from "./layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MainPage,
  PopularPage,
  NowPlayingPage,
  TopRatedPage,
  UpcomingPage,
  MovieDetailPage,
  NotFoundPage,
} from "./pages";

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
      {
        path: "movie/:original_title",
        element: <MovieDetailPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
