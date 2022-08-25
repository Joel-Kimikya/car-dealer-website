import React from 'react';
import Image from 'next/image';

import Features from './Features';

import AudiRsa from '../assets/rs3.jpg';

const Shopping = () => {
  return (
    <div>
      <div className='mt-9 relative flex flex-col justify-center w-11/12 pl-6'>
        <Image
          src={AudiRsa}
          alt='audiRsa'
          height={1400}
          className='rounded-xl'
        />

        <div className='absolute w-full'>
          <div className='mt-10 ml-14 text-white font-semibold text-xl'>
            <p>New 2022 AUDI</p>
          </div>
          <div className='mt-6 ml-14 text-white text-5xl font-semibold'>
            <p>i7 Gran Coupe</p>
            <p>M57</p>
          </div>
          <div className='mt-28 ml-10 w-32 h-12 flex justify-center items-center  border-2 border-white-1000 text-white rounded-lg font-semibold text-xl cursor-pointer'>
            <p className='w-full text-center'>Shop Now</p>
          </div>
          <div />
          <div className=' flex flex-row justify-center items-center w-full space-x-3'>
            <div className='w-5 h-5 bg-white border-4 border-white rounded-full  cursor-pointer'></div>
            <div className='w-5 h-5 bg-transparent border-4 border-white rounded-full  cursor-pointer'></div>
            <div className='w-5 h-5 bg-transparent border-4 border-white rounded-full  cursor-pointer'></div>
          </div>
        </div>
      </div>
      <div className='ml-6 mt-16 mb-9 text-2xl font-semibold flex space-x-4 text-gray-900'>
        <p>Highlighted Features</p>
        <p className='border border-gray-300 rounded-t-lg rounded-b-lg pr-2 pl-2 text-xl mt-1'>
          6
        </p>
      </div>
      <Features />
    </div>
  );
};

export default Shopping;
