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
        I'm Gal Amar, a junior software engeneer and I'm excited to begin my career as a
        software developer. My journey began with working as a phone technician at John Bryce
        followed by two years in security work at Israel Railways. 
        During my time as a Security Guard and Baggage Screener, I sharpened my sense of
        responsibility and attention to detail.
        </p>
        <p>
        Beyond work and studies, I'm passionate about sports, TV series, and enjoying quality time
        with friends. Currently, my main goal is transitioning into software engineering, leveraging
        my solid skills in Java, C, and web development. I work well in team, love assisting colleagues,
        and excel in self-driven learning and accountability
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </section>
  )
}

export default About