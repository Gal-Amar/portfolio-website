import React from 'react'
import "./contact.css"
import { MdEmail } from 'react-icons/md'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
const Contact = () => {
  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail size={20} className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>galamar22@gmail.com</h5>
            <a href='mailto:galamar22@gmail.com' target='_blank'>Send me a message</a>
          </article>

          <article className='contact_option'>
            <IoLogoWhatsapp size={20} className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <a href='https://wa.me/+972505429789' target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <FaFacebookSquare size={18} className='contact_option_icon' />
            <h4>Facebook</h4>
            <a href='https://m.me/gala22/' target='_blank'>Send me a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messge</button>
        </form>

      </div>
    </section>
  )
}

export default Contact