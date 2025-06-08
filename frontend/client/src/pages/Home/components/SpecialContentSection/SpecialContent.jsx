import React from "react";
import "./SpecialContent.css";
import Slider from "../../../../components/UI/Slider/Slider.jsx";

function SpecialContent() {
  return (
    <section className="special__content__wrapper">
      <h2 className="special__content__heading">MovieBear'a Özel İçerikler</h2>
      <p className="special__content__text">
        Başka hiçbir yerde bulunmayan özgün içeriklerin dünyasına adım at!
      </p>
      <div className="slider__container">
        <Slider />
      </div>
    </section>
  );
}

export default SpecialContent;
