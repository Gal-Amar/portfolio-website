import React, { useState } from 'react'
import "./portfolio.css"
import { IoIosArrowDown } from "react-icons/io";
import IMG1 from '../../assets/DonkeyWebPic.jpeg'
import IMG2 from '../../assets/Zerli.jpeg'
import IMG3 from '../../assets/PortfolioWebPic.jpeg'
import ZerliWorkProcess from './ZerliWorkProcess'
import DonkeyWorkProcess from './DonkeyWorkProcess';
import PortfolioWorkProcess from './PortfolioWorkProcess';

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
    github: 'https://github.com/Gal-Amar/portfolio-website',
    demo: 'https://tinyurl.com/3kmmk99z',
  },
  {
    id: 3,
    image: IMG1,
    badge: 'In Progress',
    title: 'Donkey And Friends',
    description: 'Coloring pages website',
    github: 'https://github.com/Gal-Amar/donkey-website',
    demo: null,
  },

]


const ProcessHandler = (props) => {
  console.log(props.id);
  switch (props.id) {
    case 1: return < ZerliWorkProcess />;
    case 2:
      return <PortfolioWorkProcess />
    case 3:
      return <DonkeyWorkProcess />;
    default:

  }
}

const Portfolio = () => {
  const [openId, setOpenId] = useState(null);


  const toggleProcess = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio_container" >
        {
          data.map(({ id, image, badge, title, description, github, demo }) => {
            return (
              <div >
                <article key={id} className='portfolio_item'>
                  <div className='portfolio-item-top'>
                    <div className="portfolio_item-image">
                      <img src={image} alt={title} />
                    </div>
                    <div className='badge'>
                      <div>{badge}</div>
                    </div>
                    <h3>{title}</h3>
                    <small>{description}</small>
                    <div className="portfolio_item-cta">
                      <a href={github} className={github === null ? 'btn btn-disabled' : 'btn'} target="_blank"  >Github</a>
                      <a href={demo} className={demo === null ? 'btn btn-primary-disabled' : 'btn btn-primary'} target="_blank" disabled={demo === 'none' ? true : false}>Live Demo</a>
                    </div>
                  </div>
                  <div className="process">
                    <button className='process-btn' target="_blank" onClick={() => toggleProcess(id)}>
                      Work Process
                      <div className="process-btn-icon">
                        <IoIosArrowDown />
                      </div>
                    </button>

                  </div>
                </article>
                <div >
                  <div className="small-devices">
                    {openId === id && (
                      <div className="work-process-section">
                        < ProcessHandler id={openId} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

            )
          }
          )

        }
      </div>
      {openId != null && (
        <div className="work-process-section large-devices">
          < ProcessHandler id={openId} />
        </div>
      )}
    </section>
  )
}

export default Portfolio