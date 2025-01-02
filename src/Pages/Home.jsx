import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/HeroSection';
import Feature from '../components/Feature'
import '../index.css'

import Footer from '../components/Footer';
function Home() {
  return (
    <>

        <Navbar />

        <div className="max-w-7xl mx-auto pt-20 px-6">
            <HeroSection/>
            <Feature/>
        </div>
        
        <div className="max-w-7xl overlay:hidden mx-auto pt-20 px-6">
            <Footer/>
        </div>

    </>
  )
}

export default Home
