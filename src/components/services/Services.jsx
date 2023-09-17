import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h4>What I Offer</h4>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX */}

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service_head">
            <h3>Cntent Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>bla bla bla</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services