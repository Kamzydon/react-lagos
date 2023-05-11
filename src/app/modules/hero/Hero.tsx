'use client';

import React from 'react';
import Image from 'next/image';
import Photo from '../../../../public/gerald.jpg';
import { Twitter, Facebook, Email, Instagram } from '@mui/icons-material';

const Hero: React.FC<{}> = () => {
  return (
    <div className='bg-gray-100 py-16 border border-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-48 flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2 md:pr-12 mb-8 md:mb-0 flex items-center justify-center'>
          <div className='rounded-full h-80 w-80 flex items-center justify-center bg-black overflow-hidden'>
            <Image
              className='h-full w-full object-cover'
              src={Photo}
              alt='Profile'
            />
          </div>
        </div>
        <div className='md:w-1/2'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            I attempt to craft elegant solutions with code.
          </h1>
          <div className='text-gray-900 text-lg mb-8 '>
           Your text should go here
          </div>
          <div className='flex items-center justify-center md:justify-start'>
            <a href='#' className='text-gray-600 hover:text-gray-900 mx-2'>
              <Twitter />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900 mx-2'>
              <Facebook />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900 mx-2'>
              <Email />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900 mx-2'>
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;