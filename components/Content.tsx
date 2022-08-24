import React from 'react';

import { GoSearch } from 'react-icons/go';
import Shopping from './Shopping';

const Content = () => {
  return (
    <div className='w-full h-auto p-10'>
      <div className='flex flex-row'>
        <div className='border-l-4 w-1 mt-14 h-20 absolute'></div>
        <p className='font-semibold px-6 pt-9 text-4xl text-gray-900'>
          Hello, popular car brand
        </p>

        <ul className='flex font-semibold text-gray-400 pt-10 space-x-10 text-lg ml-10 pl-9'>
          <li>
            <a href='#'>Cars</a>
          </li>
          <li>
            <a href='#'>Makes</a>
          </li>
          <li>
            <a href='#'>Types</a>
          </li>
          <li>
            <a href='#'>Topis</a>
          </li>
        </ul>
        <GoSearch className='mt-11 ml-10 text-2xl cursor-pointer' />
      </div>

      <div className='flex flex-row mt-7'>
        <div>
          <span className='font-courgette text-4xl font-bold text-white bg-greeny ml-6 pt-0 pr-4 pl-4 pb-1 rounded-full'>
            v
          </span>
        </div>
        <p className='pt-2 text-gray-400 font-semibold text-xl ml-5'>
          CAR Brands -<span className='text-sky'>TOP 20 </span>in the World
        </p>
        <div>
          <div className='ml-60 space-x-8 flex pt-2 pb-2 pl-3 pr-3 text-gray-600 font-semibold bg-gray-100 rounded-2xl'>
            <div className='bg-white p-2 rounded-xl shadow-xl'>
              <a href='#'>Upcoming</a>
            </div>
            <div className='p-2'>
              <a href='#'>Recent</a>
            </div>
          </div>
        </div>
      </div>
      <div className='ml-6 mt-10 text-2xl font-semibold flex space-x-4 text-gray-700'>
        <p>Upcoming</p>
        <p className='border border-gray-300 rounded-t-lg rounded-b-lg pr-2 pl-2 text-xl mt-1'>
          8
        </p>
      </div>
      <Shopping />
    </div>
  );
};

export default Content;
