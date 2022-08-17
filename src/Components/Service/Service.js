import React from 'react'
import './service.css'

import serice1 from '../../images/service1.webp'
import IndividualService from '../IndividualService/IndividualService'

const Service = () => {
  return (
    <div className='service-container'>
        <div className="service-title">
            <p>Our Services</p>
            <h1>What we offer?</h1>
        </div>

        <div className="service-details">
            <IndividualService/>
            <IndividualService/>
            <IndividualService/>
            <IndividualService/>
        </div>
        
    </div>
  )
}

export default Service