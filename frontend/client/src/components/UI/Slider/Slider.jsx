import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "../../../pages/Home/components/SpecialContentSection/components/MovieCard/MovieCard.jsx";

const Slider = ({ movies }) => {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        perPage: 6,
        gap: "1rem",
        breakpoints: {
          768: {
            perPage: 1,
          },
        },
      }}
      aria-label="Film Slider"
    >
      {movies.map((movie, index) => (
        <SplideSlide key={index}>
          <MovieCard slug={movie.slug} image={movie.poster_path} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
