import React from 'react'
import "./footer.css"
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href={'#'} className='footer_logo'>Gal Amar</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.facebook.com/gala22/" target="_blank"><FaFacebookF size={18}/></a>
      <a href="https://www.instagram.com/galamar2/" target="_blank"> <FiInstagram size={18}/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Gal Amar Portfolio Website. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer