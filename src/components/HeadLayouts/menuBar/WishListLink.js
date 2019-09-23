import React from 'react'
import { NavLink } from 'react-router-dom'

const WishList = () => {
    return (
        <div className="navbar">
            <NavLink to='/' className="menu-item" id ="menu-item7">Wish List</NavLink>   
        </div>
    )
}

export default WishList;