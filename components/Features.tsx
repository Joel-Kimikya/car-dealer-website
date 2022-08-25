import React from 'react';
import Image from 'next/image';

import Interior from '../assets/wp.jpg';
import Interor from '../assets/interior.png';
import { IoIosArrowForward } from 'react-icons/io';
import Anouncement from './Anouncement';

const Features = () => {
  return (
    <div className='w-11/12 pl-6'>
      <div className='flex flex-row bg-gray-200 py-4 w-full rounded-2xl space-x-6 justify-start items-center relative'>
        <div className='flex'>
          <div className='ml-5'>
            <Image
              src={Interior}
              alt='carInterior'
              height={70}
              width={70}
              className='rounded-lg'
            />
          </div>
          <div className='font-semibold text-gray-700 ml-4'>
            Navigation System
            <br />
            <span className='text-xs font-bold text-gray-400'>
              New-<span className='text-yellw'>2022</span>
              <span className='text-bl'> AUDI</span>
            </span>
          </div>
        </div>
        <div className='flex'>
          <div className='ml-5'>
            <Image
              src={Interor}
              alt='carSensor'
              height={70}
              width={70}
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='font-semibold text-gray-700'>
          Parking Sensors
          <br />
          <span className='text-xs font-bold text-gray-400'>
            New-<span className='text-yellw'>2022</span>
            <span className='text-bl'> AUDI</span>
          </span>
        </div>
        <div className='flex'>
          <div className='ml-5'>
            <Image
              src={Interior}
              alt='carInterior'
              height={70}
              width={70}
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='font-semibold text-gray-700'>
          Automatic Control
          <br />
          <span className='text-xs font-bold text-gray-400'>
            New-<span className='text-yellw'>2022</span>
            <span className='text-bl'> AUDI</span>
          </span>
        </div>
        {/* <div className='pl-20'> */}
        <IoIosArrowForward className='bg-rosey rounded-full text-white text-5xl cursor-pointer absolute shadow-2xl shadow-rosey -right-3' />
        {/* </div> */}
      </div>
      <Anouncement />
    </div>
  );
};

export default Features;
