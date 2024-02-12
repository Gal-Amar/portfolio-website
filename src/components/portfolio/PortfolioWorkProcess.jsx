import { useState } from 'react';
import me from '../../assets/me.png'
import portfolio from '../../assets/portfolio.jpeg'






const PortfolioWorkProcess = () => {

  return (
    <div className="container process_container">
      <div className="process-headline">
        <h1 className="">Portfolio Web Project</h1>
      </div>
      <div className="process-content-section-one">
        <div>
          <img src={me} className='portfolio-logo' />
        </div>
        <div className="section-one-des">
          <p>
          When I first decided to learn React, CSS, and HTML, I decided that the best way to go about it 
          would be to actually build a website. However, I didn't have a specific project in mind, so I 
          thought about creating a website that would be useful for my future projects. That's when I 
          decided to create my own resume/portfolio website.
          </p>
        </div>
      </div>
      <div className="process-content-section-two">
        <div className="section-two-des">
          <p>
          In order to learn React, I followed a few steps. Firstly, I completed a React web course on
          YouTube to gain a good understanding of the basics. After that, I came across a guide on building 
          a resume website, which I followed to improve my knowledge on React and its component organization. 
          During this process, I also gained a deeper understanding of CSS and HTML, discovering new techniques 
          and concepts that were previously unfamiliar to me.
          </p>
        </div>
        <div>
          <img className="portfolio-image" src={portfolio} ></img>
        </div>
      </div>
      
     
    </div>
  );
}

export default PortfolioWorkProcess;