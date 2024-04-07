import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PopularPage from "./pages/PopularPage/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage/TopRatedPage";
import UpcomingPage from "./pages/UpComingPage/UpcomingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/now" element={<NowPlayingPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/up-coming" element={<UpcomingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
