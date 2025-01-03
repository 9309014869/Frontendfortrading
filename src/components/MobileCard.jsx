
import React, { useState } from 'react';
import videoFile from "../assets/profile-pictures/tradingvedio.mp4";

function MobileCard() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Stake.Build.Earn",
      content:
        "A Decentralized Application For Staking And Building LUSD, Accepting A Mixture Of LINA Tokens And Other Major Cryptocurrencies.",
    },
    {
      id: 2,
      title: "Smart Staking",
      content:
        "Intelligent staking protocols optimized for maximum yield generation across multiple chains.",
    },
    {
      id: 3,
      title: "Cross-Chain Building",
      content:
        "Build and deploy across multiple blockchains with unified liquidity and composable assets.",
    },
    {
      id: 4,
      title: "Earn Rewards",
      content:
        "Earn rewards through liquidity provision, staking, and cross-chain operations.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-black via-gray-900 to-black justify-center items-center min-h-screen p-4">
      
      {/* Left Side (Video Card) */}
      <div className="w-full lg:w-1/2 p-4 flex justify-center">
        <div className="rounded-xl shadow-2xl border border-blue-500 p-6 bg-blue-500 animate-pulse-glow h-[540px] overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 animate-tilt shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="w-[340px] h-[640px] bg-gray-900 rounded-[30px] shadow-xl overflow-hidden border border-gray-700">
            
            <div className="p-4 flex justify-between items-center bg-black/50">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">≡</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center relative">
                <span className="text-white text-sm">🔔</span>
                <div className="absolute top-0 right-0 bg-blue-500 w-3 h-3 rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative w-full h-full">
              <video
                className="absolute inset-0 w-full h-full rounded-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90"
                controls
                muted
              >
                <source src={videoFile} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Content Section) */}
      <div className="w-full lg:w-3/4 p-4">
        <div className="max-w-xl mx-auto">
          {/* Navigation Buttons for Sections */}
          <div className="flex space-x-4 mb-8 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center
                  ${
                    activeSection === section.id
                      ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                      : 'bg-gray-800 hover:bg-blue-400/20 hover:shadow-lg hover:shadow-blue-400/20'
                  }`}
              >
                <span className="text-white font-bold">{section.id}</span>
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`transform transition-all duration-500 ease-in-out ${
                  activeSection === section.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 hidden'
                }`}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="  text-blue-500  bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent  select-none">0{section.id} </span>
                  
                  <h1 className=' bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-none '>{section.title}</h1>
                </h2>
                <p className="text-gray-400 text-lg break-words  bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto  text-xl">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Marquee Section */}
          <div className="mt-16 flex justify-between text-center">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="text-6xl font-bold text-gray-800 "
              >
                <marquee className="flex w-max animate-marquee-move gap-4 pl-4 text-white  "> 0 {num} </marquee>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileCard;
