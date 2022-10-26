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
            <img src={require('../../assets/avatar1.jpg')} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere ea beatae eveniet voluptatibus sapiente laudantium hic asperiores. Veritatis magnam tempora totam quod rerum voluptatum minima dolorum est nam facere.
            </small>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={require('../../assets/avatar2.jpg')} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere ea beatae eveniet voluptatibus sapiente laudantium hic asperiores. Veritatis magnam tempora totam quod rerum voluptatum minima dolorum est nam facere.
            </small>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={require('../../assets/avatar3.jpg')} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere ea beatae eveniet voluptatibus sapiente laudantium hic asperiores. Veritatis magnam tempora totam quod rerum voluptatum minima dolorum est nam facere.
            </small>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={require('../../assets/avatar4.jpg')} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere ea beatae eveniet voluptatibus sapiente laudantium hic asperiores. Veritatis magnam tempora totam quod rerum voluptatum minima dolorum est nam facere.
            </small>
        </article>

        

      </div>

    </section>
  )
}

export default Testimonials