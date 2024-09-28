import React from 'react'
import "./App.css"
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <h1 className='App'>
        <Home></Home>
      </h1>
<About/>
<Work/>
<Testimonial/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App