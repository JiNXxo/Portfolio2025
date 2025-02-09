import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App