/* eslint-disable no-unused-vars */
import React from 'react';
import debitcardimage from '../assets/Debitcard.png';

function Card_below_marquee() {
  return (
    <div className="relative rounded-md p-5">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row bg-gray-800 rounded-md p-8">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full p-3 flex flex-col text-white">
          <span className="text-[30px] lg:text-[40px] font-bold">Fans on MetaBeat</span>
          <span className="text-[30px] lg:text-[40px] font-bold">build and strengthen</span>
          <hr className="my-4 border-gray-600" />
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#"
              className="bg-green-600 hover:bg-green-500 py-2 px-4 border rounded-full text-white font-medium transition-all"
            >
              Get Started Now
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-500 py-2 px-4 border rounded-full text-white font-medium transition-all"
            >
              &gt;
            </a>
            <a
              href="#"
              className="py-2 px-4 text-gray-300 hover:text-white font-medium transition-all"
            >
              Play Now
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex justify-center flex-col p-3 text-gray-400">
          <span className="text-[14px] lg:text-[15px]">The MetaBeat platform is an</span>
          <span className="text-[14px] lg:text-[15px]">incentivization community platform</span>
          <span className="text-[14px] lg:text-[15px]">powered by fan activities rewarded by</span>
          <span className="text-[14px] lg:text-[15px]">a set criteria, the FANomance Index.</span>
        </div>
      </div>

      {/* Secondary Section */}
      <div className="flex flex-col lg:flex-row bg-gray-800 p-5 mt-5 rounded-md">
        {/* Left Content */}
        <div className="lg:w-3/5 w-full bg-gray-700 p-8 rounded-md flex flex-col text-white relative">
  <div className="flex flex-col">
    <span className="text-[30px] lg:text-[40px] font-bold">MetaBeat is</span>
    <span className="text-[30px] lg:text-[40px] font-bold">Available on</span>
  </div>
  <div className="mt-5 flex">
    <div className="w-full flex flex-col p-3 text-gray-400">
      <span className="text-[14px] lg:text-[15px]">The MetaBeat platform is an</span>
      <span className="text-[14px] lg:text-[15px]">incentivization community platform</span>
      <span className="text-[14px] lg:text-[15px]">powered by fan activities rewarded by</span>
      <span className="text-[14px] lg:text-[15px]">a set criteria, the FANomance Index.</span>
    </div>
    <div className="absolute bottom-0 right-0 p-3">
      <img
        src={debitcardimage}
        alt="Debit Card"
        className="w-44"
      />
    </div>
  </div>
</div>


        {/* Right Image */}
        <div className="lg:w-2/5 w-full flex items-center justify-center mt-5 lg:mt-0">
          <img
            src="https://img.freepik.com/premium-photo/bitcoin_136615-133.jpg"
            alt="trading"
            className="rounded-md w-full lg:w-auto h-auto max-w-[400px] object-cover shadow-lg"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Card_below_marquee;
