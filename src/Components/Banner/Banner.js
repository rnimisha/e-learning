import React from 'react'
import './banner.css'

import mainimg from '../../images/main-pic.png'
import MiniInfo from '../MiniInfo/MiniInfo'

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className="banner-left">
            <span>Providing you with </span>
            <span>Education & Inspiration</span>
            {/* <p>Discover best psrograms built with industry experts</p> */}

            <button class='btn'>Explore courses</button>
        </div>

        <div className="banner-right">
            <div className="banner-img-container">
                <img src={mainimg} alt="mainbanner" />
                <div className="light-glow"></div>
            </div>
            <div className="banner-mini-info">
                <MiniInfo number={1000} text={'Excelent courses'}/>
                <MiniInfo number={1000} text={'Excelent courses'}/>
                <MiniInfo number={1000} text={'Excelent courses'}/>
            </div>
        </div>
    </div>
  )
}

export default Banner