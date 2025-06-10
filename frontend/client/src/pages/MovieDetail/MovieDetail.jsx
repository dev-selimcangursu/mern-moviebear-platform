import React, { useEffect } from "react";
import "./MovieDetail.css";
import TrailerArea from "./components/TrailerArea";
import Episodes from "./components/Episodes/Episodes";
import { useParams } from "react-router-dom";
import { fetchIsSelectMovie } from "../../redux/slices/MovieSlice";
import { fetchAllEpisodes } from "../../redux/slices/EpisodesSlice";
import { useSelector, useDispatch } from "react-redux";

function MovieDetail() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  console.log(slug);

  const movie = useSelector((state) => state.movies.sectionMovie);
  const movieId = movie?.[0]?._id;
  console.log(movieId);

  useEffect(() => {
    dispatch(fetchIsSelectMovie(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchAllEpisodes(movieId));
    }
  }, [dispatch, movieId]);

  const episodes = useSelector((state) => state.episodes.episodes);
  console.log(episodes);

  return (
    <div className="movie__detail__wrapper">
      <TrailerArea movie={movie} />
      <Episodes episodes={episodes} />
    </div>
  );
}

export default MovieDetail;
