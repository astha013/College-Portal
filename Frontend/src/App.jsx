import React from 'react'
import { useState } from 'react'
import HeaderHeroSection from './components/Header'
import Footer from './components/Footer'
import InternshipSection from './pages/Internship'
import AddInternship from './pages/AddInternship'
function App() {
  

  return (
    <>
      <HeaderHeroSection />
      <InternshipSection />
      <AddInternship />
      <Footer />
        
    </>
  )
}

export default App
