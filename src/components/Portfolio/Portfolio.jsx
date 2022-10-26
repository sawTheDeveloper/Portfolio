import React from 'react'
import './Portfolio.css'



const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/portfolio1.jpg')} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">Github</a>
            <a href="github.com" className="btn" target="_blank">Live Demo</a>
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/portfolio1.jpg')} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">Github</a>
            <a href="github.com" className="btn" target="_blank">Live Demo</a>
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/portfolio1.jpg')} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">Github</a>
            <a href="github.com" className="btn" target="_blank">Live Demo</a>
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/portfolio1.jpg')} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">Github</a>
            <a href="github.com" className="btn" target="_blank">Live Demo</a>
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/portfolio1.jpg')} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">Github</a>
            <a href="github.com" className="btn" target="_blank">Live Demo</a>
           </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require('../../assets/portfolio1.jpg')} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">Github</a>
            <a href="github.com" className="btn" target="_blank">Live Demo</a>
           </div>
          </article>

          

        </div>
    </section>
  )
}

export default Portfolio