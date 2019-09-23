import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div className="navbar">
            <NavLink to='/About' className="menu-item" id ="menu-item2">About us</NavLink>
        </div>
    )
}

export default About;