import React from 'react'
// import { NavLink } from 'react-router-dom'
import Home from './HomeLink'
import About from './AboutUsLink'
import Careers from './CareersLink'
import Contact from './ContactUsLink'
import CompanyProfile from './CompanyProfileLink'
import CompanyRegistration from './companyRegistrationLink'
import WishList from './WishListLink'
import '../../../style/MenuNavBar.css'
 
const NavBar = () => {
    return (
        <div className="menu">
        <div className="menu-container">
            <nav className="menu-bar">
                <Home />
                <About />
                <Careers />
                <Contact />
                <CompanyProfile />
                <CompanyRegistration />
                <WishList />
            </nav>
        </div>

        </div>
    )
}

export default NavBar;