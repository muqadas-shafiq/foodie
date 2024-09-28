import React from 'react'
 import PickMeals from '../assets/pick-meals-image.png';
import ChooseMeals from '../assets/choose-image.png';
import DeliveryMeals from '../assets/delivery-image.png';


const Work = () => {
    const workInfoData=[
         {
           image:PickMeals,
           title:"Pic kMeals" ,
           text:" voluptatum accusamus tenetur maiores numquam  sapiente quidem "

         },
         {
           image: ChooseMeals,
           title:"choose  How often " ,
           text:"  maxime voluptatum accusamus , tenetur maiores numquam quidem "

         },
         {
           image:DeliveryMeals,
           title:"Deliver Meals" ,
           text:"dolor sit amet , maxime voluptatum "

         }
     ]
  return (
    <div className='work-section-wrappe'>
      <div className='work-section-top'>
        <p className='primary-subheading'> Work</p>
        <h1 className='primary-heading'>How It works</h1>
        <p className='primary-text'> Officia rerum repudiandae sed, praesentium , porro   dignissimos  delectus quam eum qui blanditiis voluptatum harum quisquam! </p>
      </div>
      <div className='work-section-bottom'>
       {
         workInfoData.map((data)=>(
            <div className='work-section-info'>
              <div className='info-boxes-image-container'>
                <img src={data.image} alt="" />
              </div>
              <h1>{data.title}</h1>
              <p className='primary-text' >{data.text}</p>
            </div>
          )
         )}
       
        </div>
      </div>
  
  )
}

export default Work