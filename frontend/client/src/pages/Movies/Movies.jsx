import React from 'react'
import MoviesSliderSection from './components/MoviesSliderSection/MoviesSliderSection'
import './Movies.css'
import Footer from '../../components/Footer/Footer'
import HighlightsSection from './components/HighlightsSection/HighlightsSection'
import SpecialContentSection from './components/SpecialContentSection/SpecialContentSection'
import GlobalProductionsSection from './components/GlobalProductionsSection/GlobalProductionsSection'
import BookAdaptationsSection from './components/BookAdaptationsSection/BookAdaptationsSection'
import ActionSeriesSection from './components/ActionSeriesSection /ActionSeriesSection'
import ComedySeriesSection from './components/ComedySeriesSection/ComedySeriesSection'
function Movies() {
  return (
    <>
    <MoviesSliderSection/>
    <HighlightsSection/>
    <SpecialContentSection/>
    <GlobalProductionsSection/>
    <BookAdaptationsSection/>
    <ActionSeriesSection/>
    <ComedySeriesSection/>
    <Footer/>

    </>
  )
}

export default Movies