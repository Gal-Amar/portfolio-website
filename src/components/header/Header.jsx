import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Gal Amar</h1>
        <h4 className='text-light'>Software Developer</h4>
        <CTA />
        <div className="me">
          <img src={ME} alt='me' />
        </div>
        <HeaderSocials />
        <a href='#contact' className='scroll_down'>scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header
