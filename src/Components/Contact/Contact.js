import React from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
const Contact = () => {
    const sendMail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_4iectkm', 'template_zqofwga', e.target, 'ol7dPKZzuzqQH69XF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }
    return (
        <div className='contact-container'>
                <div className="service-title">
                    <p>Contact Us</p>
                    <h1>Keep in touch</h1>
                </div>
                <div className="contact-form-container">
                <form onSubmit={sendMail}>
                    <div>
                        <input type="text" placeholder='Name' name= 'name'/>
                        <input type="text" placeholder='Email' name= 'email'/>
                    </div>
                    <div>
                        <textarea name="message" placeholder='You message here...'></textarea>
                    </div>
                    <button className='btn' type='submit'>Send</button>
                </form>
                </div>
                <div className="aura-effect effect-pos1"></div>
                <div className="aura-effect effect-pos2"></div>

            </div>
    )
}

export default Contact