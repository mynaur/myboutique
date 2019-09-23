import React from 'react'
import { NavLink } from 'react-router-dom'
import vericalBarIcon from  '../../icon/verical-bar-icon.png'

const JeansLink = () => {
    return (
        <div className="item">
            <NavLink to='/Jeans' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Jeans</NavLink>
            
        </div>
    )
}

export default JeansLink