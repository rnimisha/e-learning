import React from 'react'
import './banner.css'

import mainimg from '../../images/main-pic.png'

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className="banner-left">
            <span>Providing you with </span>
            <span>Education & Inspiration</span>
            {/* <p>Discover best programs built with industry experts</p> */}

            <button class='btn'>Explore courses</button>
        </div>

        <div className="banner-right">
            <div className="banner-img-container">
                <img src={mainimg} alt="mainbanner" />
                <div className="light-glow"></div>
            </div>
            <div className="banner-mini-info">
                    mini info here
            </div>
        </div>
    </div>
  )
}

export default Banner