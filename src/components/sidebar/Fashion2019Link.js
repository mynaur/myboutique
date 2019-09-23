import React from 'react'
import { NavLink } from 'react-router-dom'
import vericalBarIcon from  '../../icon/verical-bar-icon.png'

const Fashion2019Link = () => {
    return (
        <div className="item">
            <NavLink to='/Fashion2019' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Fashion 2019</NavLink>
            
        </div>
    )
}

export default Fashion2019Link