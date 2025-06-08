import React from 'react'
import './JoinUsBenefitCard.css'

function JoinUsBenefitCard(props) {
  return (
    <div className='join__us__benefit__card'>
      <div className='join__us__benefit__card__content'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className='join__us__benefit__card__icon'>
          <img src={props.icon} alt="" />
      </div>
    </div>
  )
}

export default JoinUsBenefitCard