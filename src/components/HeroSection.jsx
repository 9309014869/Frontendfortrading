import React from 'react'
import { Menu, X } from "lucide-react";
import { Wallet } from 'lucide-react';
import {CircleCheckBig} from 'lucide-react';
import { MoveUpRight } from 'lucide-react';
import video1 from '../assets/trd1.mp4';
function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-15">
      <h1 className="text-4xl sm:text-3xl bodoni-moda lg:text-6xl text-center tracking-wide">
      Land Emails in Inboxes, Not Spam! <br/>10X 
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {" "}Your Sales Pipeline!
        </span>
      </h1>
        <p className="mt-10 text-lg font-semibold text-center text-neutral-500 max-w-4xl">
        Maximise your outreach potential with ReachInbox's unlimited email accounts, AI-driven warmups, and multi-channel capabilities. 10x your leads, meetings and deals.
        </p>

    <div className="flex justify-center my-12">
      <a href="#" className=" flex text-lg bg-gradient-to-b from-blue-700 to-purple-800 px-5 py-4 mx-10 rounded-3xl">
      Get Started Now <MoveUpRight />
      </a>
    </div>

    <div className="flex justify-center items-center flex-wrap">
  <a href="#" className="flex text-sm bg-neutral-800 items-center text-center px-4 py-2 mx-3 mb-2 md:mb-0 border rounded-full">
    <Wallet color="#38fe01" className="mr-2"/>No credit card required
  </a>

  <a href="#" className="flex text-sm bg-neutral-800 items-center px-4 py-2 mx-3 border rounded-full">
    <CircleCheckBig color="#0091ff" className="mr-2"/>7-Day Free Trial
  </a>
</div>


<div className="flex justify-center items-center drop-shadow-xl shrink-0 mt-32 w-full h-full top-0 left-0">
  <video autoPlay loop muted className="rounded-lg w-full h-full shadow-white   my-4">
    <source src={video1} type="video/mp4" />
    Your Browser Does not support 
  </video>
</div>

    </div>
    
  )
}

export default HeroSection
