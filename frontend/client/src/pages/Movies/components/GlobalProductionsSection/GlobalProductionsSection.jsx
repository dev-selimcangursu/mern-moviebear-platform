import React from 'react'
import MoviesSliderSection from '../../../../components/UI/MoviesSliderSection/MoviesSliderSection'
import './GlobalProductionsSection.css'
import '../../../../styles/SectionTitle.css'

function GlobalProductionsSection() {
  return (
     <section className="globalproductions-content-section">
      <div className="globalproductions-container">
        <h3 className="section-title">Dünya Çapında Diziler</h3>
        <MoviesSliderSection />
      </div>
    </section>
  )
}

export default GlobalProductionsSection