import React from "react";
import './MoviesSliderSection.css';
import Slider from '../Slider/Slider';

function MoviesSliderSection({ data }) {
  console.log(data);

  return (
    <section className="movies-section">
      <div className="container">
        <Slider movies={data} />
      </div>
    </section>
  );
}

export default MoviesSliderSection;
