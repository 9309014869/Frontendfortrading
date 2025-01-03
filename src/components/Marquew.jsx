/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Marquew() {

    const [tags, setTags] = useState([
        "Home Bank",
        "Lamborghini",
        "Hoonigan",
        "Enhanced",
        "SiteZone"
    ]);
    

  return (
    <div className="flex p-3 border-y-[1px] border-slate-500 overflow-hidden relative mb-2">
        <div className="flex animate-marquee">
            {tags.map((item, index) => (
            <div
                className="text-slate-500 mx-[60px] p-2 hover:bg-stone-800 hover:text-white rounded-[12px] transition-all duration-200 shadow-lg"
                key={index}
            >
                {item}
            </div>
            ))}
        </div>
        <div className="flex animate-marquee2 absolute">
            {tags.map((item, index) => (
            <div
                className="text-slate-500 mx-[60px] p-2 hover:bg-stone-800 hover:text-white rounded-[12px] transition-all duration-200 shadow-lg"
                key={index}
            >
                {item}
            </div>
            ))}
        </div>
    </div>

  )
}

export default Marquew;