import React from 'react'
import './navbar.css'


const Navbar = ({scrollToSection, home, service, course, contact}) => {

    return (
    <nav className ="navigation">
        <div className="nav-logo">
            COURSEDEMY
        </div>
        <div className="nav-list">
            <ul>
                <li onClick={() =>{scrollToSection(home)}}>Home</li>
                <li onClick={() =>{scrollToSection(service)}}>Service</li>
                <li onClick={() =>{scrollToSection(course)}}>Courses</li>
                <li onClick={() =>{scrollToSection(contact)}}>Contact</li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar