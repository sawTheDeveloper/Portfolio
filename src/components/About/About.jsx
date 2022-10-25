import React from 'react'
import "./About.css"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { } from "../../assets/me-about.png";


const About = () => {
  return (
    <section id="about">About
    <h5>
      Get To Know
    </h5>
    <h2>About Me</h2>

    <div className="container about__container">
    <div className="about__me">
    <div className="about__me-image">
      <img src={null} alt="About" />
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda nostrum molestiae mollitia blanditiis, minima laborum nobis quis debitis? Culpa dolore vitae sed quis ab vel nam laudantium voluptatem blanditiis?
    </p>

      <a href="#contact" className="btn btn-primary">Let's Talk</a>
      
    </div>
    </div>
    
    </section>
    
  )
}

export default About

