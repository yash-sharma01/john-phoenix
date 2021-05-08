import React from 'react'
import './Navbar.scss'
import { RiSpyLine } from 'react-icons/ri'
import { FaFacebook } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container container">
        <div className="logo"> 
          <RiSpyLine className="logo-icon" /><span className="logo-text">John Phoenix</span>
        </div>
        <ul className="nav-links">
          <li className="nav-link">About</li>
          <li className="nav-link">Works</li>
          <li className="nav-link">Services</li>
          <li className="nav-link">Blog</li>
        </ul>
        <div className="social-media">
          <FaFacebook className="social-media-icon"/>
          <RiInstagramFill className="social-media-icon" />
          <FaTwitter className="social-media-icon" />
          <FaDribbble className="social-media-icon" />
          <FaMedium className="social-media-icon" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
