import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
      <div className="service__head">
        <h3>Web Development</h3>
      </div>

      <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon" />
          <p>Front-end Web Development.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>E-Commerce platform setup.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Websites.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Web Apps.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Web Development and launch of a web app.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Web Redesign and Modernization.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Continuous support and evolution.</p>
        </li>
      </ul>
      </article>
        {/*---------------------Web Development-----------------------  */}
        <article className="service">
      <div className="service__head">
        <h3>Content Creation</h3>
      </div>

      <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon" />
          <p>Basic and/or aggressive planning.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Market and product research.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Market evaluation and audience targeting planning.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Branding.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Social Media Advertisment.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Audience building content creation.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Digital Advertising.</p>
        </li>
      </ul>
      </article>
        {/*---------------------End Of Content Creation-----------------------  */}
        <article className="service">
      <div className="service__head">
        <h3>Media Engineer</h3>
      </div>

      <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon" />
          <p>Audio and Video Engineering.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Video Editing and Photography.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>2D animation and some 3D animation.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Some Graphic Design.</p>
        </li>        
      </ul>
      </article>
      
        {/*---------------------End of Media Engineer-----------------------  */}
     </div>
    </section>
  )
}

export default Services