import React from 'react'
import './ComedySeriesSection.css'
import MoviesSliderSection from '../../../../components/UI/MoviesSliderSection/MoviesSliderSection'
import '../../../../styles/SectionTitle.css'

function ComedySeriesSection() {
  return (
     <section className="comedy-series-content-section">
      <div className="comedy-series-container">
        <h3 className="section-title">Komedi Yapıtları</h3>
        <MoviesSliderSection />
      </div>
    </section>
  )
}

export default ComedySeriesSection