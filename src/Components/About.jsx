import React from 'react'
import AboutBackground from "../assets/about-background.png"; 
import AboutBackgroundImage from "../assets/about-background-image.png"; 
import {BsFillPlayCircleFill} from 'react-icons/bs'
const About = () => {
  return (
    <div className='about-section-container '>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An important part of A balanced Diet
            </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perferendis , maxime voluptatum accusamus tenetur maiores numquam , sapiente quidem 
            </p>
            <p className='primary-text'>
                  Officiis, perferendis dignissimos repellendus , maxime voluptatum <br /> accusa
                 Officiis, perferendis dignissimos repellendus quia, 
            </p>
           <div className='about-buttons-container'>
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button' > <BsFillPlayCircleFill className='icon'/>Watch Video</button>
           </div>
        </div>

    </div>
  )
}

export default About