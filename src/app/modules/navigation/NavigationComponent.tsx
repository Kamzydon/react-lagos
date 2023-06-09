'use client';

import React from 'react';
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { ChevronRightIcon, Bars3Icon } from '@heroicons/react/20/solid';
import { NavButton, PopoverButton } from '../navigation/NavbarStyles';

const NavigationComponent: React.FC<{}> = () => {
  return (
    <div className='bg-green-500 shadow-md sticky z-50 border-gray-900 border border-1'>
      <div className='flex justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10 '>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <span className='sr-only'>Kamaludeen.</span>
          <div className='h-8 w-auto sm:h-8'>Kamaludeen.</div>
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className={PopoverButton}>
            <span className='sr-only'>Open menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <Popover.Group as='nav' className='hidden md:flex space-x-10'>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Home
          </Link>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            About
          </Link>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Top Management
          </Link>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Departments
          </Link>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Locations
          </Link>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            FAQ
          </Link>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Accredited CBO
          </Link>
        </Popover.Group>
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <div className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition  cursor-pointer hover:text-gray-900'>
            Contact
          </div>
          <div className={NavButton}>
            <Link href='/'>Nysc portal</Link>
            <ChevronRightIcon className='ml-2 -mr-1 w-5 h-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;