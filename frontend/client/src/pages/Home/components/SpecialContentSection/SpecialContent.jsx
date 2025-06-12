import React, { useEffect } from "react";
import "./SpecialContent.css";
import Slider from "../../../../components/UI/Slider/Slider.jsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchIsExclusiveMovieList } from "../../../../redux/slices/MovieSlice.js";

function SpecialContent() {
  const dispatch = useDispatch();
    // özel içerikli filmler listesi
  const exclusiveMovies = useSelector((state) => state.movies.isExclusiveMovie);
  console.log(exclusiveMovies)
  // Bileşen yüklendiğinde özel içerik filmleri yükle
  useEffect(() => {
    dispatch(fetchIsExclusiveMovieList());
  }, [dispatch]);

  return (
    <section className="special__content__wrapper">
      <h2 className="special__content__heading">MovieBear'a Özel İçerikler</h2>
      <p className="special__content__text">
        Başka hiçbir yerde bulunmayan özgün içeriklerin dünyasına adım at!
      </p>
      <div className="slider__container">
        <Slider movies={exclusiveMovies} />
      </div>
    </section>
  );
}

export default SpecialContent;
