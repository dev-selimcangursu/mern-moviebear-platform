import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import MoviePlay from "./pages/MoviePlay/MoviePlay.jsx"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug/icerik" element={<MovieDetail />} />
      <Route path="/:id/izle" element={<MoviePlay />} />
    </Routes>
  );
}
