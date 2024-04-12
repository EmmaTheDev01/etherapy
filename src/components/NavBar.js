import React from 'react'
import './nav.css'
const NavBar = () => {
  return (
    <div className='navbar'>
   <div className='logo-container'>
    <li> logo</li>
   </div>
   <div className='menu'>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact Us</li>
   </div>
    </div>
  )
}

export default NavBar