import React from 'react'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Items from './Items'
import Testimonial from './Testimonial'
import NavFooter from './NavFooter'
import Footer from './Footer'
const App = () => {
  return (
    <div>
      <div className="home-bg">
        <Navbar />
        <Home />
      </div>
        <About />
        <Items />
        <Testimonial />
        <NavFooter />
        <Footer />
    </div>
  )
}

export default App;