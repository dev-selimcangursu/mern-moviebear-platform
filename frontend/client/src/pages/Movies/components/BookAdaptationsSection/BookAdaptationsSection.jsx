import React from "react";
import "./BookAdaptationsSection.css";
import MoviesSliderSection from "../../../../components/UI/MoviesSliderSection/MoviesSliderSection";
import "../../../../styles/SectionTitle.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchIsAdaptedBookMovie } from "../../../../redux/slices/MovieSlice";
import { useEffect } from "react";

function BookAdaptationsSection() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.adaptedBookMovie);
  console.log(movies);

  useEffect(() => {
    dispatch(fetchIsAdaptedBookMovie());
  }, [dispatch]);
  return (
    <section className="book-adaptations-content-section">
      <div className="book-adaptations-container">
        <h3 className="section-title">Kitaptan Uyarlananlar</h3>
        <MoviesSliderSection data={movies} />
      </div>
    </section>
  );
}

export default BookAdaptationsSection;
