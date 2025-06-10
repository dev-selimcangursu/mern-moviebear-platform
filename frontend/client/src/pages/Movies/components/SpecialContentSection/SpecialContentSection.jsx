import React from "react";
import MoviesSliderSection from "../../../../components/UI/MoviesSliderSection/MoviesSliderSection";
import "./SpecialContentSection.css";
import '../../../../styles/SectionTitle.css'

function SpecialContentSection() {
  return (
    <section className="special-content-section">
      <div className="special-container">
        <h3 className="section-title">MovieBear'a Özel Diziler</h3>
        <MoviesSliderSection />
      </div>
    </section>
  );
}

export default SpecialContentSection;
