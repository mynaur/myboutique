import React from 'react'
import { NavLink } from 'react-router-dom'
import vericalBarIcon from  '../../icon/verical-bar-icon.png'

const ManLink = () => {
    return (
        <div className="item">
            <NavLink to='/Man' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Man</NavLink>
            
        </div>
    )
}

export default ManLink
