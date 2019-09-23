import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="navbar">
            <NavLink to='/' className="menu-item" id ="menu-item1">Home</NavLink>   
        </div>
    )
}

export default Home;