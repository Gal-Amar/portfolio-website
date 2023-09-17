import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/DonkeyWebPic.jpeg'
import IMG2 from '../../assets/Zerli.jpeg'
import IMG3 from '../../assets/PortfolioWebPic.jpeg'

const data = [
  {
    id: 1,
    image: IMG2,
    badge: 'Complete',
    title: 'Zerli- Flower shop',
    description: 'Mid-term Project, Written in Java',
    github: 'https://github.com/Gal-Amar/Zerli/tree/main',
    demo: 'https://youtu.be/uiTDp1Rb5aQ',
  },
  {
    id: 2,
       image: IMG3,
    badge: 'Complete',
    title: 'Gal Amar Portfolio',
    description: 'Resume Website',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG1,
    badge: 'In Progress',
    title: 'Donkey And Friends',
    description:'Coloring pages website',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image,badge,  title, description, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <div className='badge'>
                  <div>{badge}</div>
                </div>
                <h3>{title}</h3>
                <small>{description}</small>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio