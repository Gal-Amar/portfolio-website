import React from 'react'
import "./testimonials.css"
import AVT1 from '../../assets/avatar1.png'
import AVT2 from '../../assets/avatar2.png'
// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVT1,
    name: 'Avatar Name',
    review: 'bla bla bla'
  },
  {
    avatar: AVT2,
    name: 'Avatar Name',
    review: 'bla bla bla'
  },
  {
    avatar: AVT1,
    name: 'Avatar Name',
    review: 'bla bla bla'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h4>Review from acquaintances</h4>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt='Avatar One' />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
     
      </Swiper>
    </section>
  )
}

export default Testimonials