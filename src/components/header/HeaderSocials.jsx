
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/amar-gal/" target="_blank"><BsLinkedin size={25}/></a>
      <a href="https://github.com/Gal-Amar" target="_blank"> <FaGithub size={27}/></a>
    </div>
  )
}

export default HeaderSocials