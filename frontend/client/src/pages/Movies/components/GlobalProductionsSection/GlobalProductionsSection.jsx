import React from "react";
import MoviesSliderSection from "../../../../components/UI/MoviesSliderSection/MoviesSliderSection";
import "./GlobalProductionsSection.css";
import "../../../../styles/SectionTitle.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchIsWorldwideMovie } from "../../../../redux/slices/MovieSlice";
import { useEffect } from "react";

function GlobalProductionsSection() {
  const dispatch = useDispatch();
  // Redux store'dan dünya çapındaki diziler
  const movies = useSelector((state) => state.movies.worldwideMovie);
  console.log(movies);
  // Bileşen yüklendiğinde dünya çapındaki dizileri getir
  useEffect(() => {
    dispatch(fetchIsWorldwideMovie());
  }, [dispatch]);
  return (
    <section className="globalproductions-content-section">
      <div className="globalproductions-container">
        <h3 className="section-title">Dünya Çapında Diziler</h3>
        <MoviesSliderSection data={movies} />
      </div>
    </section>
  );
}

export default GlobalProductionsSection;
