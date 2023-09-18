import React from 'react'
import "./about.css"
import ME from '../../assets/myPic2.JPEG'
import { FaAward } from 'react-icons/fa'
import { BiBadgeCheck } from 'react-icons/bi'
import { RiFoldersFill } from 'react-icons/ri'
const About = () => {
  return (
    <section id='about'>
      <h4>Get To Know</h4>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h4>GPA</h4>
              <small>84</small>
            </article>

            <article className='about_card'>
              <BiBadgeCheck className='about_icon' />
              <h4>2nd Place</h4>
              <small>Hackathon for the Elderly</small>
            </article>

            <article className='about_card'>
              <RiFoldersFill className='about_icon' />
              <h4>Projects</h4>
              <small>2 Completed, 2 in Progress</small>
            </article>
          </div>

        </div>

      </div>
      <div className="container about_me_p">
        <p>
        I'm Gal Amar, a fourth-year software engineering student at Braude College, 
        eager to begin my career as a software developer. My journey began with training 
        as a phone technician at John Bryce Instruction, followed by two fulfilling years 
        in security work at Israel Railways. During my time as a Security Guard and Baggage 
        Screener, I sharpened my sense of responsibility and attention to detail.
        </p>
        <p>
        Outside of work and studies, I'm passionate about group sports, TV series, and spending
        quality time with friends. Now, my primary focus is on transitioning into software 
        engineering, where I can apply my strong foundation in Java, C, and web development. 
        I thrive in collaborative environments, enjoy helping colleagues, and excel in self-motivated
        learning and accountability. 
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </section>
  )
}

export default About