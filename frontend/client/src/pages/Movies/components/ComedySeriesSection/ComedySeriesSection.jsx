import React from "react";
import "./ComedySeriesSection.css";
import MoviesSliderSection from "../../../../components/UI/MoviesSliderSection/MoviesSliderSection";
import "../../../../styles/SectionTitle.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchIsComedySeriesMovie } from "../../../../redux/slices/MovieSlice";
import { useEffect } from "react";

function ComedySeriesSection() {
  
  const dispatch = useDispatch();
  // Redux store'dan komedi dizilerini seç
  const movies = useSelector((state) => state.movies.comedySeriesMovies);
  console.log(movies);
   // Bileşen yüklendiğinde komedi dizilerini çekmek için dispatch 
  useEffect(() => {
    dispatch(fetchIsComedySeriesMovie());
  }, [dispatch]);
  return (
    <section className="comedy-series-content-section">
      <div className="comedy-series-container">
        <h3 className="section-title">Komedi Yapıtları</h3>
        <MoviesSliderSection data={movies} />
      </div>
    </section>
  );
}

export default ComedySeriesSection;
