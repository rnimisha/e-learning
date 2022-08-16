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
            <div className="aura-effect effect-pos1"></div>
        </div>

        <div className="banner-right">
            <div className="banner-img-container">
                <img src={mainimg} alt="mainbanner" />
                <div className="light-glow"></div>
            </div>
            <div className="banner-mini-info">
                <MiniInfo number={1290} text1={'Excelent'} text2={'courses'} id ={'1'}/>
                <MiniInfo number={29} text1={'Proficient'} text2={'tutors'} id ={'0'}/>
                <MiniInfo number={'100%'} text1={'Creative'} text2={'environment'} id ={'1'}/>

                <span className="aura-effect effect-pos2"></span>
            </div>
        </div>
    </div>
  )
}

export default Banner