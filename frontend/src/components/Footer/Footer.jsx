import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
    <img src={assets.logo} alt="" />
    <p>A team is not a group of people that work together. A team is a group of people that trust each other decision and action,and we have thee team for your event planning. </p>
    <div className="footer-social-icons">
        <a href="www.facebook.com"><img src={assets.facebook_icon} alt="Facebook" /></a>
        <a href="www.linkedin.com"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
        <a href="www.twitter.com"><img src={assets.twitter_icon} alt="Twitter" /></a>    
            
          </div>    
        </div>
        
        <div className="footer-content-center">
    <h2>COMPANY</h2>
    <ul>
        <li >Home</li>
        <li >About us</li>
        <li >Contact-us</li>
        <li >Privacy policy</li>
    </ul>
        </div>
        <div className="footer-content-right">
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+91 7979070431</li>
        <li>eventplanner@gmail.com</li>
    </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2024 @ Event Planner - All Right Reserved.</p>
        </div>
  )
}

export default Footer