import React from 'react';
import {CircleCheckBig} from 'lucide-react';
import { features } from '../constants';

function Feature() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    <div className="text-center">
        <span className="text-orange-500 rounded-full h-6 text-2xl font-mono px-2 py-2">
        Let's Experience New Distance
        </span>

        <h2 className="text-3xl sm:text-3xl font-serif lg:text-5xl font-semibold lg:mt-10">
            Cold E-mail Outreach on  {" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">
            Steroids
            </span>
        </h2>

        <span className="text-neutral-600 h-6 text-lg my-20 font-semibold px-2 py-2">
            Boost your business's potential with unparalleled outreach.
        </span>

    </div>

    <div className="flex flex-wrap justify-between mt-10 lg:mt-20">
      {features.map((feature, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6 flex">
          <div className="bg-neutral-950 border-stone-500 border rounded-2xl px-10 py-6 flex flex-col flex-grow">
            <div className="flex items-center mb-6">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full mx-6">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 text-xl">
                  {feature.text}
                </h5>
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-md p-2 mb-6 text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

</div>

  )
}

export default Feature
