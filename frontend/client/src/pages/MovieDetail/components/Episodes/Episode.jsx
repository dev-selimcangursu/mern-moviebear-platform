import React from "react";
import "./Episode.css";

function Episode({ data }) {
  if (!data) {
    return (
      <div className="movie__part__item empty">
        <p>Bölüm bilgisi bulunamadı.</p>
      </div>
    );
  }

  return (
    <a className="movie__part__link" href={`/${data._id}/izle`}>
      <div className="movie__part__item">
        <div className="movie__part__item__image">
          <img
            src={`http://localhost:3000/episodes-banner/${data.episode_image}`}
            alt="Bölüm Görseli"
          />
        </div>
        <div className="movie__part__item__main">
          <h5>{data.title}</h5>
          <p>{data.description}</p>
        </div>
      </div>
    </a>
  );
}

export default Episode;
