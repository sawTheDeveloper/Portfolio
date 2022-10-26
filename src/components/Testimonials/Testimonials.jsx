import React from 'react'
import './Testimonials.css'



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={require('../../assets/pic8.jpg')} alt="" />
          </div>
          <h5 className="client__name">Scott Bridge</h5>
            <small className="client__review">
                "Showed the initiative needed to get the job done. Very impressed"
            </small>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={require('../../assets/pic6.jpg')} alt="" />
          </div>
          <h5 className="client__name">Shane Smith</h5>
            <small className="client__review">
              "Dedicated and creative, puts alot of time into your project"
            </small>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={require('../../assets/pic7.jpg')} alt="" />
          </div>
          <h5 className="client__name">John Leddy</h5>
            <small className="client__review">
              "Patrick helped us automate a business process that saves us thousands of dollars"
            </small>
        </article>

        

        

      </div>

    </section>
  )
}

export default Testimonials