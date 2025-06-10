import React from "react";
import "./HighlightsSection.css";
import MoviesSliderSection from '../../../../components/UI/MoviesSliderSection/MoviesSliderSection'
import '../../../../styles/SectionTitle.css'

function HighlightsSection() {
  return (
    <section className="highlight-content-section">
      <div className="highlight-container">
        <h3 className="section-title">Öne Çıkan Diziler</h3>
        <MoviesSliderSection />
      </div>
    </section>
  );
}

export default HighlightsSection;
