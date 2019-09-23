import React from 'react'
import { NavLink } from 'react-router-dom'
import vericalBarIcon from  '../../icon/verical-bar-icon.png'

const TshirtLink = () => {
    return (
        <div className="item">
            <NavLink to='/' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Tshirt</NavLink>
            
        </div>
    )
}

export default TshirtLink