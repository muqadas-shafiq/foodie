import React from 'react'
import Logo from './assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import {SiLinkedin} from 'react-icons/si'; 

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt="" />
            </div>
            <div className='footer-icons '>
                <BsTwitter />
                <BsYoutube />
                < FaFacebook/>
                <SiLinkedin />
            </div>
        </div>
        <div className='footer-section-two'>
           <div className='footer-section-columns'>
            
            <span>HElp</span>
            <span>Carear</span>
            <span>Quality</span>
            <span>Share</span>
            <span>Services</span>
            <span>Testimonial</span>
            <span>Work</span>
           </div>
           <div className='footer-section-columns'>
            
            <span>222-331-224</span>
            <span>helpFood.com</span>
            <span>PressFood.com</span>
            <span>Share</span>
            <span>Services</span>
            <span>Testimonial</span>
            <span>About</span>
           </div>
           <div className='footer-section-columns'>
            
            <span>HElp</span>
            <span>Carear</span>
            <span>Quality</span>
            <span>Share</span>
            <span>Services</span>
            <span>Terms & conditions</span>
            <span>Privacy</span>
           </div>
        </div>
    </div>
  )
}

export default Footer