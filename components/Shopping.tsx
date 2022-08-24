import React from 'react';
import Image from 'next/image';

import AudiRsa from '../assets/rs3.jpg';

const Shopping = () => {
  return (
    <div>
      <div className='mt-9 mr-28 relative flex flex-col'>
        <Image
          src={AudiRsa}
          alt='audiRsa'
          height={1400}
          className='rounded-3xl'
        />

        <div className='absolute'>
          <div className='mt-10 ml-14 text-white font-semibold text-xl'>
            <p>New 2022 BMW</p>
          </div>
          <div className='mt-6 ml-14 text-white text-5xl font-semibold'>
            <p>i7 Gran Coupe</p>
            <p>M57</p>
          </div>
          <div className='mt-32 ml-10 mr-7 border-2 border-white-1000 text-white rounded-full pl-24 font-semibold text-xl'>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className='ml-6 mt-10 text-2xl font-semibold flex space-x-4 text-gray-700'>
        <p>Highlighted Features</p>
        <p className='border border-gray-300 rounded-t-lg rounded-b-lg pr-2 pl-2 text-xl mt-1'>
          6
        </p>
      </div>
    </div>
  );
};

export default Shopping;
