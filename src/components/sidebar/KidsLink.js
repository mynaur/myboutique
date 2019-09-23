import React from 'react'
import { NavLink } from 'react-router-dom'
import vericalBarIcon from  '../../icon/verical-bar-icon.png'

const KidsLink = () => {
    return (
        <div className="item">
            <NavLink to='/Kids' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Kids</NavLink>
            
        </div>
    )
}

export default KidsLink