/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/HeroSection';
import Feature from '../components/Feature'
import '../index.css'

import Footer from '../components/Footer';
import Marquew from '../components/Marquew';
import Card_below_marquee from '../components/Card_below_marquee';
function Home() {
  return (
    <>

        <Navbar />

        <div className="max-w-7xl mx-auto pt-20 px-6">
            <HeroSection/>
            <Marquew/>
            <Card_below_marquee/>
            <Feature/>
        </div>
        
        <div className="max-w-7xl overlay:hidden mx-auto pt-20 px-6">
            <Footer/>
        </div>

    </>
  )
}

export default Home
