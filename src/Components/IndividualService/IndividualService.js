import React from 'react'
import './individual-service.css'


const IndividualService = ({img, title, info}) => {
  return (
    <div className='individual-container'>
        <div className="indi-img">
            <img src={img} alt="" />
        </div>
        <div className="ind-title">
            {title}
        </div>
        <p>
            {info}
        </p>
    </div>
  )
}

export default IndividualService