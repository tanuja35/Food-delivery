import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-app</li>
        
            <li>Contact us</li>
        </ul>
       <div className="navbar-right">
        <img src="search_icon.png" alt="" />
        <div className="navbar-search-icon">
            <img src="basket_icon.png" alt="" />
            <div className="dot">

                <button>sign in</button>

            </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar
