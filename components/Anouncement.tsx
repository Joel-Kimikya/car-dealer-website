import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { AiFillStar } from 'react-icons/ai';

import car from '../assets/11111.jpg';
import cars from '../assets/urus.jpg';
import rs4 from '../assets/concept.jpg';

const Announcement = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 w-full md:grid-cols-3 my-12 gap-4'>
        <Card
          rating={'5.0'}
          description={'Petrol 7.87 kmpl'}
          image={car}
          price={'$ 12k USD'}
          title={'Audi AQ5'}
        />
        <Card
          rating={'5.0'}
          description={'Petrol 7.87 kmpl'}
          image={cars}
          price={'$ 12k USD'}
          title={'Lamborghini Urus'}
        />
        <Card
          rating={'5.0'}
          description={'Petrol 7.87 kmpl'}
          image={rs4}
          price={'$ 12k USD'}
          title={'Audi RS4'}
        />
      </div>
    </div>
  );
};

export default Announcement;

const Card = ({
  rating,
  title,
  description,
  price,
  image,
}: {
  rating: string;
  title: string;
  description: string;
  price: string;
  image: StaticImageData;
}) => {
  return (
    <div className='relative flex'>
      <div className='flex w-auto h-56'>
        <Image src={image} alt='Picture of the Car' className='rounded-xl' />
      </div>
      <div className='absolute my-4'>
        <div className='flex space-x-1'>
          <AiFillStar className='text-yellw w-5 h-5 ml-5' />
          <p className='text-white font-bold'>{rating}</p>
        </div>
        <div className='text-white font-semibold ml-3 mt-16'>{title}</div>
        <div className='text-white font-semibold ml-3 mt-6'>
          <p className='font-normal text-sm'>{description}</p>
          <p className='text-lg'>
            {price} <span className='text-xs text-bl'>(price in USA)</span>
          </p>
        </div>
      </div>
    </div>
  );
};
