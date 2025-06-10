import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import './MoviesSliderSection.css';

const movies = [
  {
    id: 1,
    name: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    category: "Sci-Fi, Thriller",
    banner: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
  },
  {
    id: 2,
    name: "Interstellar",
    description: "A team of explorers travel through a wormhole in space.",
    category: "Sci-Fi, Adventure",
    banner: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 3,
    name: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind who wants to create chaos.",
    category: "Action, Crime, Drama",
    banner: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

function MoviesSliderSection() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          height: "100vh",
          width: "100%",
          arrows: true,
          pagination: true,
          autoplay: true,
          interval: 3000,
          gap: "1rem",
        }}
        style={{ height: "100%" }}
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <div
              className="slide-banner"
              style={{
                backgroundImage: `url(${movie.banner})`,
              }}
            >
              <div className="slide-info">
                <h2>{movie.name}</h2>
                <p>{movie.description}</p>
                <span>{movie.category}</span>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default MoviesSliderSection;
