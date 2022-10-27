import React from 'react'
import logo from "../../../assets/home/logo.png";
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo-img" className='logo-img' />
                <p className='logo-name'>Lilies</p>
            </div>
            <div className="navlinks">
                <ul>
                    <li className='home-btn'><a href="Home">Home</a></li>
                    <li><a href="Login">Login</a></li>
                    <li className='signUp-btn'><a href="SignUp">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar