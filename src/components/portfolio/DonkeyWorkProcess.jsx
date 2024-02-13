import donkey1 from '../../assets/donkey-first vision.jpeg'
import donkey2 from '../../assets/donkey_1.jpeg'
import donkeyLogo from '../../assets/donkey.png'

import donkey3 from '../../assets/donkey-curr.jpeg'

import { IoConstruct } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";



const DonkeyWorkProcess = () => {
 

  return (
    <div className="process_container">
      <div className="process-headline">
        <h1>Donkey & Friends Project</h1>
      </div>
      <div className="process-content-section-one">
        <div className="project-logo-donkey">
          <img src={donkey1} className='donkey-pic' style={{transform: 'rotate(-2deg)'}}/>
          <img src={donkey2} className='donkey-pic pic-2' style={{  transform: 'rotate(2deg)'}} />
        </div>
        <div className="section-one-des">
          <p>
          The Donkey Website is an exciting project that began as a platform for coloring pages featuring unique and vibrant characters 
          created by my sister. Our long-term goal is to transform it into a children's clothing store, and to achieve that, I collaborated 
          closely with my sister to ensure we were both on the same page. We started by sketching ideas on paper and continued to hold regular 
          meetings to discuss her thoughts and ideas, which allowed us to make the best decisions for the website. 
          </p>
        </div>
      </div>
      <div className="process-content-section-two">
        <div className="section-two-des">
          <p> 
          I had some prior knowledge in React, HTML, and CSS, which helped me get started on the project.
          However, as I began planning a website with a large number of pages, I encountered several challenges. 
          One of the key requirements was to set up a database to store the links and descriptions of all the 
          pages and another one was to design of the website. To improve my skills, I searched for a database and 
          React components and decided to use Mantine UI for its components and JSON file for the DB. 
          </p>
        </div>
        <div className="project-donkey-image">
          <img className="donkey-logo" src={donkeyLogo} ></img>
        </div>
      </div>
      <div className="process-content-section-two">
        <div className="section-two-des" style={{alignItems:'center'}}>
          <p style={{display: 'grid', justifyItems: 'center'}}>
          <IoConstruct size={55}/> <br /><br/>
          The website is still a work in progress   <br /> and currently looks like this 
          <br />
          <p className='arrow-p'><FaLongArrowAltRight size={20}/><FaLongArrowAltRight size={20}/><FaLongArrowAltRight size={20}/></p>
          </p>
        </div>
        <div className="project-donkey-image">
          <img className="donkey-pic-3" src={donkey3} ></img>
        </div>
      </div>
 
    </div>
  );
}

export default DonkeyWorkProcess;