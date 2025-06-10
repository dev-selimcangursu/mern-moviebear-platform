import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug/tanıtım" element={<MovieDetail />} />
    </Routes>
  );
}
