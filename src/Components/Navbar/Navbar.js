import React from 'react'
import './navbar.css'


const Navbar = () => {
    return (
    <nav className ="navigation">
        <div className="nav-logo">
            COURSEDEMY
        </div>
        <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>Service</li>
                <li>Courses</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar