import React from 'react'
import './mini-info.css'

const MiniInfo = ({number, text}) => {
  return (
    <div className='mini-info-container'>
        <span>{number}</span>
        <span>{text}</span>
    </div>
  )
}

export default MiniInfo