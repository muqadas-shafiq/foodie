import React from 'react'
import johndoe from '../assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrappe'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What they Are saying!</h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quae nesciunt dignissimos! Quidem architecto quis excepturi quas optio eum voluptates .</p>
        </div>
        <div className='testimonial-section-bottom '>
            <img src={johndoe } alt="" />
            <p className='primary-text'> Vitae quaerat, ad doloremque harum necessitatibus quibusdam eveniet deleniti culpa officiis expedita, dolor reprehenderit blanditiis, explicabo fuga nostrum? Officiis nesciunt dolores rerum!</p>
            <div className='testimonials-stars-container'>
         < AiFillStar />
         < AiFillStar />
         < AiFillStar />
         < AiFillStar />
                     <div>
                <h2>John Doe</h2>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Testimonial