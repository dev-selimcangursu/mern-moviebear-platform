import React from 'react'
import './ActionSeriesSection.css'
import MoviesSliderSection from '../../../../components/UI/MoviesSliderSection/MoviesSliderSection'
import '../../../../styles/SectionTitle.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchIsActionSeriesMovie } from "../../../../redux/slices/MovieSlice";
import { useEffect } from "react";

function ActionSeriesSection() {

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.actionSeriesMovies);
    console.log(movies);
  
    useEffect(() => {
      dispatch(fetchIsActionSeriesMovie());
    }, [dispatch]);
  return (
    <section className="action-series-content-section">
      <div className="action-series-container">
        <h3 className="section-title">Aksiyon Dorukta</h3>
        <MoviesSliderSection data={movies} />
      </div>
    </section>
  )
}

export default ActionSeriesSection