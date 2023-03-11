import React from 'react'
import './App.css'

//Sections
import Footer from './components/dashboard/Footer'
import Navbar from './components/dashboard/Navbar'
import HomeSection from './components/sections/HomeSection'
import LearnmoreSection from './components/sections/LearnmoreSection'
import SignupSection from './components/sections/SignupSection'
import TestimonialSection from './components/sections/TestimonialSection'

function App() {


  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <LearnmoreSection />
      <TestimonialSection />
      <SignupSection />
      <Footer />
    </div>
  )
}

export default App
