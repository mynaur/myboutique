import React from 'react'
import { NavLink } from 'react-router-dom'
import vericalBarIcon from  '../../icon/verical-bar-icon.png'

const SummberCollectionLink = () => {
    return (
        <div className="item">
            <NavLink to='/' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Summber Collection</NavLink>
            
        </div>
    )
}

export default SummberCollectionLink