import React from 'react'
import { NavLink } from 'react-router-dom'
import vericalBarIcon from  '../../icon/verical-bar-icon.png'

const WomenLink = () => {
    return (
        <div className="item">
            <NavLink to='/Women' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Women</NavLink>
            
        </div>
    )
}

export default WomenLink