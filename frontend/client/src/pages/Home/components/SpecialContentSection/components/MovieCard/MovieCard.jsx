import React from 'react';
import './MovieCard.css';

function MovieCard({ image }) {
  return (
    <div className="movie-card">
      <img src={image} alt="Movie Poster" className="movie-card__image" />
    </div>
  );
}

export default MovieCard;
