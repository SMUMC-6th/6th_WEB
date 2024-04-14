import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootWarp } from "./components/Movies.style";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRates from "./pages/TopRates";
import UpComing from "./pages/UpComing";
import Loading from "./components/Loading";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  const loading = false;

  return (
    <RootWarp>
      <BrowserRouter>
        <Navbar />

        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NowPlaying" element={<NowPlaying />} />
            <Route path="/Popular" element={<Popular />} />
            <Route path="/TopRates" element={<TopRates />} />
            <Route path="/UpComing" element={<UpComing />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/MovieDetail/:movieId" element={<MovieDetail />} />
          </Routes>
        )}
      </BrowserRouter>
    </RootWarp>
  );
}