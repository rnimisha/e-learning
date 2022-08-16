import React from 'react'
import './banner.css'

import mainimg from '../../images/main-pic.png'

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className="banner-left">
            intro here
        </div>

        <div className="banner-right">
            <div className="banner-img-container">
                <img src={mainimg} alt="mainbanner" />
            </div>
            <div className="banner-mini-info">
                    mini info here
            </div>
        </div>
    </div>
  )
}

export default Banner