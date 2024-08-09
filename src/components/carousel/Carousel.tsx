'use client';

import React, { useState, ReactNode } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';



interface Props {
  children: ReactNode;
}

export const Carousel = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children);
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr => curr === 0 ? childrenArray.length - 1 : curr - 1);
  const next = () => setCurr(curr => curr === childrenArray.length - 1 ? 0 : curr + 1);

  return (
    <div className='overflow-hidden relative  w-full h-full lg:max-h-[400px] rounded-lg pt-2'>
      <div className='flex transition-transform ease-out duration-500 w-full h-full'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {childrenArray}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <FaAngleLeft  size={30} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <FaAngleRight size={30} />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {childrenArray.map((_, i) => (
            <div key={i} className={`transition-all w-2 h-2 bg-white rounded-full
            ${curr === i ? "p-2" : "bg-opacity-50"}
            `} />
          ))}
        </div>
      </div>
    </div>
  );
};
