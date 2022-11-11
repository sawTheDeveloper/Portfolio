import React from 'react'
import './Portfolio.css'



const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">

          {/* Insert portfolio Items below */}

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/JadeMountain_portfolio.png')} alt="" />
            </div>
            <h3>Hotel/Resort Booking App</h3>
           <div className="portfolio__item-cta">
            <a href="https://github.com/sawTheDeveloper/travel-guide-ad" rel="noreferrer" className="btn" target="_blank">Github</a>
            {/* <a href="github.com" className="btn" target="_blank">Live Demo</a> */}
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/Restaruant_portfolio.png')} alt="" />
            </div>
            <h3>Restaurant Menu - Example App</h3>
           <div className="portfolio__item-cta">
            <a href="https://github.com/sawTheDeveloper/RestaurantMenu2" rel="noreferrer" className="btn" target="_blank">Github</a>
            {/* <a href="github.com" className="btn" target="_blank">Live Demo</a> */}
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/Kdretro_portfolio.png')} alt="" />
            </div>
            <h3>Kdretros - Online Shoe Wordpress Retail</h3>
           <div className="portfolio__item-cta">
            {/* <a href="github.com" className="btn" target="_blank">Github</a> */}
            <a href="https://Kdretros.com" rel="noreferrer" className="btn" target="_blank">Link to website</a>
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/Livio_portfolio.png')} alt="" />
            </div>
            <h3>Livio206 - Band page</h3>
           <div className="portfolio__item-cta">
            {/* <a href="github.com" className="btn" target="_blank">Github</a> */}
            <a href= "https://Livio206.com" rel="noreferrer" className="btn" target="_blank">Link to website</a>
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/green_portfolio.png')} alt="" />
            </div>
            <h3>Evergreen Nexus - Company landing page</h3>
           <div className="portfolio__item-cta">
            {/* <a href="github.com" className="btn" target="_blank">Github</a> */}
            <a href="https://EvergreenNexus.com" rel="noreferrer" className="btn" target="_blank">Link to website</a>
           </div>
          </article>

          

          

        </div>
    </section>
  )
}

export default Portfolio