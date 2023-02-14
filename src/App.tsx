import React from 'react'
import './App.css'
import Footer from './components/dashboard/Footer'
import Navbar from './components/dashboard/Navbar'
import HomeSection from './components/sections/HomeSection'
import LearnmoreSection from './components/sections/LearnmoreSection'
import SignupSection from './components/sections/SignupSection'

function App() {


  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <LearnmoreSection />
      <SignupSection />
      <Footer />
    </div>
  )
}

export default App
