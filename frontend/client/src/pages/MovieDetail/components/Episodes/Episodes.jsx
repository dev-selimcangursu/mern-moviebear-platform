import React from "react";
import "./Episodes.css";
import Episode from "./Episode";
function Episodes({ episodes }) {
  return (
    <div className="movie__parts__show__area">
      <h2>Bölümler</h2>
      <ul className="movie__parts__list">
        {episodes.map((data, index) => (
          <li>
            <Episode key={index} data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Episodes;
