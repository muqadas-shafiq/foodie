import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
      <h1 className='primary-heading'>Have question In Mind</h1>
      <h1 className='primary-heading'>Let us Help yoy</h1>
      <div className='contact-form-container'>
        <input type="text" placeholder='youmail@gmail.com' />
        <button className='secondary-button'> Submit</button>
      </div>
    </div>
  )
}

export default Contact