import React from "react";
import "./about.css";
import ME from "../../assets/myPic2.JPEG";
import { FaAward } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About"></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h4>GPA</h4>
              <small>85</small>
            </article>

            <article className="about_card">
              <BiBadgeCheck className="about_icon" />
              <h4>2nd Place</h4>
              <small>Hackathon at Skai</small>
            </article>
            <article className="about_card">
              <BiBadgeCheck className="about_icon" />
              <h4>2nd Place</h4>
              <small>Hackathon for the Elderly by Joint Eshel</small>
            </article>
          </div>
        </div>
      </div>
      <div className="container about_me_p">
        <p>
          I'm Gal Amar, a Software Engineer and Technical Mentor with a B.Sc. in
          Software Engineering. After being affected by layoffs early in my
          career, I joined the training program at Infinity Labs R&amp;D to
          strengthen my technical skills and rebuild my confidence.
        </p>

        <p>
          After completing the program, I was offered the opportunity to stay
          and work alongside my mentors. Today, I develop software with Go and
          React Native and mentor students in C++ as part of the AI Software
          Engineer training program.
        </p>

        <p>
          I also have experience in full-stack development, backend systems,
          REST APIs, CI/CD, testing, and debugging. I enjoy solving technical
          problems, learning new technologies, and helping others grow.
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
