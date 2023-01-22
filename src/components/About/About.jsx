import React from 'react'
import "./About.css"
import images from '../../assets/images'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {
  return (
    <section id="about">
    <h5>
      Get To Know
    </h5>
    <h2>About Me</h2>

    <div className="container about__container">
    <div className="about__me">
    <div className="about__me-image">
      <img src={images.Me1} alt="About" />
      </div>
    </div>

       <div className="about__content">
         <div className="about__cards">

     <article className="about__card">
      <FaAward className="about__icon" />
      <h5>Experience</h5>
      <small>3 years</small>
     </article>

    <article className="about__card">
      <FiUsers className="about__icon" />
      <h5>Clients</h5>
      <small>10+</small>
    </article>

    <article className="about__card">
      <VscFolderLibrary className="about__icon" />
      <h5>Projects</h5>
      <small>20+ completed</small>
    </article>
  </div>
  

    <p>
    Throughout my youth, I dedicated a significant portion of my time to pursuing a career in hip hop music. However, as time passed, my passion shifted towards computer science and technology. Today, I channel my creativity into writing code rather than rhymes. I possess a diverse range of interests and talents, including proficiency in various modern media editing software. My drive to complete projects and solve problems often extends beyond traditional work hours. Currently, I am enjoying working on front-end development projects, but I envision moving towards lower-level machine coding in the future. Additionally, my extensive experience in creating and executing unique marketing campaigns as a musician has given me a unique perspective on social media, content creation, viral marketing, and branding that I believe would be valuable in other areas of business. I would welcome the opportunity to discuss how we can collaborate and create a brighter future together.
      </p>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
      
    </div>
    </div>
    
    </section>
    
  )
}

export default About

