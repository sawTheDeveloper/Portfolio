import React from 'react'
import './Testimonials.css'
import pic6 from '../../assets/pic6.jpg';
import pic7 from '../../assets/pic7.jpg';
import pic8 from '../../assets/pic8.jpg';
import pic9 from '../../assets/pic9.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const data = [
    {
      avatar: pic6,
      name: 'Shane Smith',
      review: 'Dedicated and creative, puts alot of time into your project'
    },

    {
      avatar:pic9,
      name: 'Konika Clemons',
      review: 'Patrick exposed my business to lots of people!'
    },
    
    {
      avatar: pic7,
      name: 'John Leddy',
      review:'Patrick helped us automate a business process that saves us thousands of dollars'
    },

    {
      avatar: pic8,
      name: 'Scott Bridge',
      review:'Showed the initiative needed to get the job done. Very impressed'
    },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
              <small className="client__review">
                  {review}
              </small>
          </SwiperSlide>)
          
          
            })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials