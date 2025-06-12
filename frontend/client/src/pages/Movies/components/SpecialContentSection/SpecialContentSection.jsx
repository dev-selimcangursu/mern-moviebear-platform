import React from "react";
import MoviesSliderSection from "../../../../components/UI/MoviesSliderSection/MoviesSliderSection";
import "./SpecialContentSection.css";
import "../../../../styles/SectionTitle.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchIsExclusiveMovieList } from "../../../../redux/slices/MovieSlice";
import { useEffect } from "react";

function SpecialContentSection() {
  const dispatch = useDispatch();
  // Redux store'dan özel dizileri seç

  const movies = useSelector((state) => state.movies.highlightsMovie);
  console.log(movies);
  // Bileşen yüklendiğinde özel dizileri fetch et
  useEffect(() => {
    dispatch(fetchIsExclusiveMovieList());
  }, [dispatch]);
  return (
    <section className="special-content-section">
      <div className="special-container">
        <h3 className="section-title">MovieBear'a Özel Diziler</h3>
        <MoviesSliderSection data={movies} />
      </div>
    </section>
  );
}

export default SpecialContentSection;
