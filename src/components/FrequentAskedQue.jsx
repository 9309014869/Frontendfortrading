// import React from 'react'
// import { useState } from 'react';
// import { AiOutlineMinus, AiOutlinePlus, AiOutlineMenu } from 'react-icons/ai';
// import { Transition } from '@headlessui/react';
// const faqsData = [
//     {
//       question: 'How do I reset my password?',
//       answer: 'To reset your password, go to the setting page and follow the instructions for password recovery or reset.'
//     },
//     {
//       question: 'Can I change my subscription plan at any time?',
//       answer: 'Yes, you can change your subscription plan at any time from your account settings. Changes will be applied immediately.'
//     },
//     {
//       question: 'Do you offer customer support?',
//       answer: 'Yes, we offer 24/7 customer support. You can contact us anytime via our support page.'
//     },
//     {
//       question: 'What payment methods do you accept?',
//       answer: 'We accept all major credit cards, PayPal, and select cryptocurrencies.'
//     },
//     {
//       question: 'How secure is my personal information?',
//       answer: 'Your personal information is protected with end-to-end encryption and will not be shared with third parties.'
//     }
//   ];
  
//   function FAQItem({ faq }) {
//     const [isOpen, setOpen] = useState(false);
  
//     return (
//       <div className='border-b-2 last:border-b-0 py-4'>
//         <div className='flex justify-between items-center cursor-pointer' onClick={() => setOpen(!isOpen)}>
//           <h2 className='text-lg font-semibold'>{faq.question}</h2>
//           {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </div>
//         <Transition
//           show={isOpen}
//           enter='transition duration-500 ease-out'
//           enterFrom='transform scale-95 opacity-0'
//           enterTo='transform scale-100 opacity-100'
//           leave='transition duration-300 ease-in'
//           leaveFrom='transform scale-100 opacity-100'
//           leaveTo='transform scale-95 opacity-0'
//         >
//           <p className='mt-2'>{faq.answer}</p>
//         </Transition>
//       </div>
//     );
//   }
  
// function FrequentAskedQue() {
  
//     const [isMenuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="bg-[#f6e4eb]">
//     <div className='bg-white text-white p-5 flex justify-between items-center'>
//       <AiOutlineMenu className='text-2xl text-black cursor-pointer' onClick={() => setMenuOpen(!isMenuOpen)} />
//       <h1 className='text-lg font-bold text-black'>Company FAQ</h1>
//     </div>
//     <Transition
//       show={isMenuOpen}
//       enter='transition duration-300 ease-out'
//       enterFrom='transform -translate-x-full'
//       enterTo='transform translate-x-0'
//       leave='transition duration-200 ease-in'
//       leaveFrom='transform translate-x-0'
//       leaveTo='transform -translate-x-full'
//     >
//       <div className='fixed z-10 inset-0 overflow-hidden'>
//         <div className='absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity'></div>
//         <section className='absolute inset-y-0 left-0 max-w-full flex'>
//           <div className='relative w-screen max-w-md'>
//             <div className='h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll'>
//               <div className='px-4 sm:px-6'>
//                 <div className='flex items-start justify-between'>
//                   <h2 className='text-lg font-medium text-gray-900' id='slide-over-title'>Menu</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Transition>
//     <div className='container mx-auto px-4 py-8'>
//       <div className='text-center mb-8 flex items-center'>
//         <div className='text-start'>
//         <h1 className='text-3xl font-bold mb-2'>How can we help?</h1>
//         <p className='text-gray-600'></p>
//         </div>
//         <img 
//         src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/5887bd5a-c3c7-493a-9f97-946ef92c0def-faqs (1).png" 
//         className="h-[300px] w-[300px] object-contain"/>
//       </div>
//       <div className="bg-white p-5 w-full">
//       <div>{faqsData.map((faq, i) => (
//         <FAQItem key={i} faq={faq} />
//       ))}</div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default FrequentAskedQue





import React, { useState } from "react";

const FrequentAskedQue = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faqs = [
    {
      title: "Where We're Going",
      content: "The crypto economy is a radical new imagining of the future of work. Open protocols will create transparency and opportunity, enabling anyone in the world to contribute their talents to a global economy.",
    },
    {
      title: "Before The Graph, Teams Had To Develop",
      content: "Teams had to build their own tools for indexing and querying blockchain data, which was time-consuming and inefficient.",
    },
    {
      title: "Recommended Reading & Future",
      content: "Explore resources to understand the crypto ecosystem better.",
    },
    {
      title: "About The Graph's Design And The Future",
      content: "The Graph is built to scale with the growing needs of the blockchain ecosystem.",
    },
    {
      title: "Many Of The Best Projects Are Using The Graph",
      content: "Projects like Uniswap and Aave rely on The Graph for querying blockchain data.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 text-white min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-5xl font-bold text-center mb-8 animate-pulse font-black    bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 animate-pulse">
          Frequently Asked Questions
        </h1>
        <p className="lg:text-xl sm:text-sm text-gray-600 mt-2">
        A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through
        </p>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`
              absolute inset-0 rounded-lg transition-all duration-700
              ${activeIndex === index ? 'bg-blue-500/20 blur-xl' : 'bg-transparent blur-none'}
              ${hoveredIndex === index ? 'bg-purple-500/20 blur-lg' : ''}
            `} />
            <div className={`
              relative bg-gray-800/50 rounded-lg overflow-hidden shadow-xl 
              transition-all duration-500 backdrop-blur-sm
              ${activeIndex === index ? 'shadow-blue-500/50' : ''}
              ${hoveredIndex === index ? 'shadow-purple-500/50' : ''}
            `}>
              <div
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`
                  flex justify-between items-center px-8 py-6 cursor-pointer
                  transition-all duration-500 group-hover:bg-gray-700/30
                  ${activeIndex === index ? 'bg-blue-900/30' : 'bg-gray-800/30'}
                `}
              >
                <h2 className={`
                  text-2xl font-semibold transition-all duration-300
                  ${activeIndex === index ? 'text-blue-300' : 'text-white'}
                  ${hoveredIndex === index ? 'scale-105' : 'scale-100'}
                `}>
                  {faq.title}
                </h2>
                <span className={`
                  text-3xl font-bold transition-all duration-500 transform
                  hover:text-blue-400 hover:scale-150
                  ${activeIndex === index ? 'rotate-45 text-blue-400' : 'rotate-0'}
                `}>
                  +
                </span>
              </div>
              <div className={`
                transition-all duration-700 ease-in-out
                ${activeIndex === index ? 
                  'max-h-96 opacity-100 bg-gray-800/30' : 
                  'max-h-0 opacity-0'}
              `}>
                <p className={`
                  px-8 py-6 text-lg leading-relaxed
                  transition-all duration-700
                  ${activeIndex === index ? 'text-blue-100' : 'text-gray-300'}
                `}>
                  {faq.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentAskedQue;