import React from 'react'
import './mini-info.css'
import { motion } from "framer-motion"


const MiniInfo = ({number, text1, text2, id}) => {

  const rightSideVariant ={
    whileInView :{
        x : [200, 0],
        transition: {
            duration : 0.5,
            ase: 'easeInOut'

        }
    }
  }

  return (
    <motion.div className='mini-info-container' variants={rightSideVariant} whileInView="whileInView">
        <span style= {{color : id === '0' ? '#a0cb8a' : '#F7C744'}}>{number}</span>
        <span>{text1}</span>
        <span>{text2}</span>
    </motion.div>
  )
}

export default MiniInfo