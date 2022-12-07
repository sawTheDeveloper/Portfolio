import React from 'react'
import './Header.css'
import CTA from './CTA'
//import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header id='#home'>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Patrick Powell</h1>
          <h5 className="text-light">Software Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src='https://ik.imagekit.io/Nexus253/me.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670398908957' alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Header