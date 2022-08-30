import React , {useState} from 'react'
import './navbar.css'
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';

const Navbar = ({scrollToSection, home, service, course, contact}) => {

    const [toggeleMenu, setToggleMenu] = useState(false)
    return (
    <nav className ="navigation">
        <div className="nav-logo" onClick={() =>{scrollToSection(home)}}>
            COURSEDEMY
        </div>
        <div className="nav-list">
            <ul>
                <li onClick={() =>{scrollToSection(home)}}>Home</li>
                <li onClick={() =>{scrollToSection(service)}}>Service</li>
                <li onClick={() =>{scrollToSection(course)}}>Courses</li>
                <li onClick={() =>{scrollToSection(contact)}}>Contact</li>
            </ul>
            <div className='mini-menu'>
                <HiMenuAlt4 onClick={()=>{setToggleMenu(true)}}/>
                {
                    toggeleMenu && (
                    <motion.div whileInView={{x : [300, 0]}} transition={{duration: 0.90, ease: 'easeOut'}}>
                        <HiX onClick={()=>{setToggleMenu(false)}}/>
                        <li onClick={() =>{scrollToSection(home)}}>Home</li>
                        <li onClick={() =>{scrollToSection(service)}}>Service</li>
                        <li onClick={() =>{scrollToSection(course)}}>Courses</li>
                        <li onClick={() =>{scrollToSection(contact)}}>Contact</li>
                    </motion.div>
                )}
            </div>
        </div>
    </nav>
    )
}

export default Navbar