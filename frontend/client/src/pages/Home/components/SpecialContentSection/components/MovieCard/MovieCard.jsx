import React from 'react';
import './MovieCard.css';

function MovieCard({ image ,slug}) {
  return (
    <a href={`/${slug}/icerik`}>
      <div className="movie-card">
        <img src={`http://localhost:3000/movie-banners/${image}`} alt="Movie Poster" className="movie-card__image" />
      </div>
    </a>
  );
}

export default MovieCard;
