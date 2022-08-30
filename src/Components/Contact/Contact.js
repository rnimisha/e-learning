import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
            <div className="service-title">
                <p>Contact Us</p>
                <h1>Keep in touch</h1>
            </div>
            <div className="contact-form-container">
               <form action="">
                <div>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                </div>
                <div>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </div>
                <button>Send</button>
               </form>
            </div>
            <div className="aura-effect effect-pos1"></div>
            <div className="aura-effect effect-pos2"></div>

        </div>
  )
}

export default Contact