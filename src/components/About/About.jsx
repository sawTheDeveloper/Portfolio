import React from 'react'
import './About.css'
import {ME} from '../../assets/profile-pic.png'

const About = () => {
  return (
    <section id='about'>About
    <h5>
      Get To Know
    </h5>
    <h2>About Me</h2>

    <div className="container about__container">
    <div className="about__me">
    <div className="about__me-image">
      {/*
      Compiled with problems:
      ERROR in ./src/components/About/About.jsx 30:17-19
      Can't import the named export 'ME' (imported as 'ME') from default-exporting module (only default export is available) */}
      <img src={ME} alt="About Me" />
      </div>
      </div>
<div className="about__content">





    </div>
    </div>
    </section>
  )
}

export default About

