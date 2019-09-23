import React from 'react'
// import { NavLink } from 'react-router-dom'
import Join from './JoinLink'
import SignIn from './SignInLink'
import SignOut from './SignOutLink'
import '../../../style/JoinBar.css'


 
const SignBar = () => {
    return (
        <div className="sign-container">
            <span className="word1">Fashion<span className="word2">press</span></span>
            <nav className="sign">
                <Join />
                <SignIn />
                <SignOut />
            </nav> 
        </div>
    )
}

export default SignBar;

