import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import MoviePlay from "./pages/MoviePlay/MoviePlay.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Register from "./pages/Auth/Register/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PremiumProtectedRoute from "./components/PremiumProtectedRoute";
import Account from "./pages/Auth/Account/Account.jsx";
import PremiumPlan from "./pages/Auth/PremiumPlan/PremiumPlan.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug/icerik" element={<MovieDetail />} />
      <Route path="/giris-yap" element={<Login />} />
      <Route path="/kayit-ol" element={<Register />} />
      <Route
        path="/:id/izle"
        element={
          <PremiumProtectedRoute>
            <MoviePlay />
          </PremiumProtectedRoute>
        }
      />
      <Route
        path="/diziler"
        element={
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hesabim"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
         <Route
        path="/premium-al"
        element={
          <ProtectedRoute>
            <PremiumPlan />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
