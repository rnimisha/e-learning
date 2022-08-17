import React from 'react'
import './service.css'

import service1 from '../../images/service1.png'
import scholarship from '../../images/scholarship.png'
import remote from '../../images/remote.webp'
import modern from '../../images/abacus.png'
import IndividualService from '../IndividualService/IndividualService'

const Service = () => {
  return (
    <div className='service-container'>
        <div className="service-title">
            <p>Our Services</p>
            <h1>What we offer?</h1>
        </div>

        <div className="service-details">
            <IndividualService img={scholarship} title={'Scholarship'} info={'We provide scholarships opportunities to deserving candidates.'}/>
            <IndividualService img={service1} title={'Certification'} info={'We provide certification after conducting examination.'}/>
            <IndividualService img={modern} title={'Modern Method'} info={'We provide the best with all modern system and technology.'}/>
            <IndividualService img={remote} title={'Remote Friendly'} info={'We are accessible anywhere anytime through remote services.'}/>

        </div>
        <div className="aura-effect effect-pos1"></div>
        <div className="aura-effect effect-pos2"></div>

    </div>
  )
}

export default Service