import React from 'react';
import '../styles/globals.css';

import Image from 'next/image';

import { BsPatchCheckFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { GiCutDiamond } from 'react-icons/gi';

import lambo from '../assets/lamborghini.jpg';
import porsche from '../assets/porsche.png';
import Content from '../components/Content';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const App = () => {
  return (
    <div className='w-full h-full flex flex-row'>
      <div className='w-1/4 py-10 px-16 bg-bg-menu bg-gradient-to-b from-white to-bg-menu'>
        <div className='flex flex-row justify-start items-center space-x-4'>
          <p className='font-courgette text-gray-900 text-8xl font-bold'>v</p>
          <p className='text-xl mt-3 text-gray-700'>Carcy</p>
        </div>
        {/* Card */}
        <div className='flex flex-col space-y-4 w-full bg-white shadow-xl rounded-xl mt-16 px-3 pt-3 pb-7'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col justify-start items-start'>
              <p className='font-medium text-2xl'>Car of the </p>
              <div className='flex justify-start items-center font-medium text-2xl space-x-3'>
                <p>Year</p>
                <BsPatchCheckFill className='text-greeny w-6 h-6' />
              </div>
            </div>
            <div className='flex space-x-1'>
              <AiFillStar className='text-yellw w-5 h-5' />
              <p className='text-gray-700'>5.0</p>
            </div>
          </div>
          <p className='text-gray-500'>
            Extreme Tech's Best Cars <br /> for{' '}
            <span className='text-yellw'>2022</span>
          </p>
          <div className='mt-4 relative flex flex-col items-center justify-center'>
            <Image
              src={lambo}
              alt='lambo'
              height={800}
              className='rounded-2xl'
            />
            <p className='text-bl bg-white py-1 px-4 font-medium rounded-lg absolute -bottom-4 shadow-xl text-center cursor-pointer hover:underline'>
              view all
            </p>
          </div>
        </div>
        <div className='flex flex-col mt-[70px] w-full'>
          <div className='flex flex-row justify-start space-x-10 items-center'>
            <p className='text-xl text-gray-600'>
              <span className='text-bl'>Premium</span> All Brands
            </p>
            <div className='flex items-center justify-center w-6 h-6 p-1 bg-black rounded-full'>
              <GiCutDiamond className='text-yellw w-full h-full' />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-0 mt-10 w-10/12'>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
            <div className='w-[75px] mb-6'>
              <Image src={porsche} alt='car' className='w-auto h-auto' />
            </div>
          </div>

          <div className='flex flex-col justify-center items-center my-10 w-full'>
            <p className='font-courgette text-gray-900 text-8xl font-bold'>v</p>
            <p className='flex flex-row space-x-2 text-xl text-gray-600 font-medium my-4'>
              <span>Get in Touch</span>
              <BsPatchCheckFill className='text-greeny w-6 h-6' />
            </p>
            <p className='my-4 text-gray-500 text-center'>
              Request a test drive or a quote, and get in touch with your
              nearest dealer.
            </p>
            <div className='uppercase bg-rosey text-white font-bold text-sm px-5 py-3 rounded-lg mt-4 mb-16'>
              Get in Touch
            </div>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default App;
