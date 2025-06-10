import React from 'react'
import './BookAdaptationsSection.css'
import MoviesSliderSection from '../../../../components/UI/MoviesSliderSection/MoviesSliderSection'
import '../../../../styles/SectionTitle.css'

function BookAdaptationsSection() {
  return (
    <section className="book-adaptations-content-section">
      <div className="book-adaptations-container">
        <h3 className="section-title">Kitaptan Uyarlananlar</h3>
        <MoviesSliderSection />
      </div>
    </section>
  )
}

export default BookAdaptationsSection