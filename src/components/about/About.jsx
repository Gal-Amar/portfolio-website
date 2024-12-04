import React from "react";
import "./about.css";
import ME from "../../assets/myPic2.JPEG";
import { FaAward } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";
import { RiFoldersFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"></img>
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
          I'm Gal Amar, a Junior Software Engineer with a B.Sc. in Computer
          Software Engineering. I have experience in full-stack development,
          using React, JavaScript, Java, and SQL/MongoDB. I'm skilled in CI/CD
          environments, OOP, and API testing.
        </p>
        <p>
          I’m passionate about building user-centric solutions and am eager to
          continue growing my skills in software engineering. I thrive in
          collaborative environments, and I’m committed to making a meaningful
          impact with my work.
        </p>
        <p>
          I'm currently seeking a junior software engineering role to apply my
          skills and contribute to innovative projects. Outside of work, I enjoy
          sports, TV series, and spending time with friends.
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
