import React, { useEffect } from "react";
import "./HighlightsSection.css";
import MoviesSliderSection from "../../../../components/UI/MoviesSliderSection/MoviesSliderSection";
import "../../../../styles/SectionTitle.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchIsHighlightsMovie } from "../../../../redux/slices/MovieSlice";

function HighlightsSection() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.highlightsMovie);
  console.log(movies);

  useEffect(() => {
    dispatch(fetchIsHighlightsMovie());
  }, [dispatch]);
  
  return (
    <section className="highlight-content-section">
      <div className="highlight-container">
        <h3 className="section-title">Öne Çıkan Diziler</h3>
        <MoviesSliderSection data={movies} />
      </div>
    </section>
  );
}

export default HighlightsSection;
