import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import  emailjs  from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qo95qcj', 'template_ym3a6ch', form.current, 'HAi3g3NKgySHkeJGq')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>"Email Me Anytime"</h5>
          <a href="mailto:Sawthedeveloper@gmail.com" rel="noreferrer" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
          <RiMessengerLine className="contact__option-icon" />
          <h4>Messenger</h4>
          <h5>"Msg Me"</h5>
          <a href="https://m.me/Sawchosiz" rel="noreferrer" target="_blank">Send A Message</a>
          </article>
          
        </div>
          {/*------------------- End of Contact Options----------- */}

          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="Email" name="Email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact