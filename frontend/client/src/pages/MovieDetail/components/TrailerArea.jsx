import React from "react";
import "./TrailerArea.css";
import Header from "../../../components/Header/Header";
function TrailerArea({ movie }) {
  return (
    <div className="trailer__container">
      <Header />
      <iframe
        className="background__video"
        src={movie?.[0]?.trailer_url}
        title="YouTube trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <div className="movie__trailer__content">
        <h3>{movie?.[0]?.name}</h3>
        <small>{movie?.[0]?.age_rating} Yaş Üzeri</small>
        <ul>
          {movie?.[0]?.ticket.map((data, index) => (
            <li>{data}</li>
          ))}
        </ul>
        <p>{movie?.[0]?.summary}</p>
      </div>
    </div>
  );
}

export default TrailerArea;
