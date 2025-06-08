import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';

function Slide(props) {
  return (
      <SplideSlide>
        {props.children}
      </SplideSlide>
  )
}

export default Slide