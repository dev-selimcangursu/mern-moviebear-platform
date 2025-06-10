import React, { useEffect } from "react";
import "./MoviePlay.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisode } from "../../redux/slices/EpisodesSlice";

function MoviePlay() {
  const dispatch = useDispatch();
  const episodeId = useParams();

  useEffect(() => {
    dispatch(fetchEpisode(episodeId.id));
  }, [dispatch, episodeId.id]);

  const episode = useSelector((state) => state.episodes.episode);

  return (
    <>
      <div className="movie-container">
        <iframe
          src={episode?.[0]?.video_url}
          title="Movie Player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default MoviePlay;
