import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            Laxman
        </div>
        <div className="links">
            <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/about'} >About</Link></li>
                <li><Link to={'/contact'} >Contact</Link></li>
                <li><Link to={'/service'} >Services</Link></li>
            </ul>
        </div>
    </nav>
  )
}
