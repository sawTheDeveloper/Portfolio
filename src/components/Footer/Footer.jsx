import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
      {/* <a href="https://evergreennexus.com/" className="footer__logo" rel="noreferrer" target="_blank">Evergreen Nexus</a> */}

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
          <div className="footer__socials">
            <a href="https://facebook.com/Sawchosiz" rel="noreferrer" target="_blank"><FaFacebookF /> </a>
            <a href="https://instagram.com/sawchosiz" rel="noreferrer" target="_blank"><FiInstagram /></a>
            {/* <a href="https://twitter.com/Sawthedeveloper" rel="noreferrer" target="_blank"><IoLogoTwitter/></a> */}
            <a href="https://Github.com/sawTheDeveloper" rel="noreferrer" target="_blank"><BsGithub /></a>
          </div>
          <div className="footer__copyright">
            <small>&copy; Evergreen Nexus. All Rights Reserved.</small>
          </div>
   </footer>
  )
}

export default Footer