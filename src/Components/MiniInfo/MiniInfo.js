import React from 'react'
import './mini-info.css'

const MiniInfo = ({number, text1, text2, id}) => {
  return (
    <div className='mini-info-container' >
        <span style= {{color : id === '0' ? '#a0cb8a' : '#F7C744'}}>{number}</span>
        <span>{text1}</span>
        <span>{text2}</span>
    </div>
  )
}

export default MiniInfo