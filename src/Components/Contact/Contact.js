import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import emailSentGif from '../../images/emailgif.gif';
import { motion } from "framer-motion";

const Contact = (props) => {

    const [isEmailsent, setEmailSent] = useState(false);

    const sendMail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_4iectkm', 'template_zqofwga', e.target, 'ol7dPKZzuzqQH69XF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setEmailSent(true);
        e.target.reset();
    }

    useEffect(() => {
      if(isEmailsent === true)
      {
        setTimeout(()=>{
            setEmailSent(false);
        }, 5000)
      }
    
    }, [isEmailsent])
    

    return (
        <div className='contact-container' ref={props.innerref}>
            <div className="service-title">
                <p>Contact Us</p>
                <h1>Keep in touch</h1>
            </div>
            <div className="contact-form-container">
            {!isEmailsent && <motion.form onSubmit={sendMail} variants={props.opacityVariant} initial={props.opacityVariant.initial} animate = {props.opacityVariant.animate}>
                <div>
                    <input type="text" placeholder='Name' name= 'name'/>
                    <input type="text" placeholder='Email' name= 'email'/>
                </div>
                <div>
                    <textarea name="message" placeholder='You message here...'></textarea>
                </div>
                <button className='btn' type='submit'>Send</button>
            </motion.form>}
            {isEmailsent &&
            <motion.div className = 'email-success-container' variants={props.opacityVariant} initial={props.opacityVariant.initial} animate = {props.opacityVariant.animate}>
                <img src={emailSentGif} alt="Success" />
            </motion.div>
            }
            </div>
            <div className="aura-effect effect-pos1"></div>
            <div className="aura-effect effect-pos2"></div>

        </div>
    )
}

export default Contact