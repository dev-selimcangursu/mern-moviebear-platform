import React from 'react'
import './ActionSeriesSection.css'
import MoviesSliderSection from '../../../../components/UI/MoviesSliderSection/MoviesSliderSection'
import '../../../../styles/SectionTitle.css'

function ActionSeriesSection() {
  return (
    <section className="action-series-content-section">
      <div className="action-series-container">
        <h3 className="section-title">Aksiyon Dorukta</h3>
        <MoviesSliderSection />
      </div>
    </section>
  )
}

export default ActionSeriesSection