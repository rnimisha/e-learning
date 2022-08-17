import React from 'react'
import './individual-service.css'
import { motion } from "framer-motion"

const IndividualService = ({img, title, info, variant}) => {

  return (
    <motion.div className='individual-container' variants={variant} whileInView={variant.whileInView}>
        <div className="indi-img">
            <img src={img} alt="" />
        </div>
        <div className="ind-title">
            {title}
        </div>
        <p>
            {info}
        </p>
    </motion.div>
  )
}

export default IndividualService