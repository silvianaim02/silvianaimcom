'use client';

import React, { useState } from 'react';
import NextImage from '../images/NextImage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  {
    /* Get the current route */
  }
  const currentRoute = usePathname();

  return (
    <div className='mx-auto px-4 py-6 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 '>
      <div className='relative flex items-center justify-between'>
        <Link
          href='/'
          aria-label='Company'
          title='Company'
          className='inline-flex items-center'
        >
          <svg
            className='text-deep-purple-accent-400 w-8'
            viewBox='0 0 24 24'
            strokeLinejoin='round'
            strokeWidth='2'
            strokeLinecap='round'
            strokeMiterlimit='10'
            stroke='currentColor'
            fill='none'
          >
            <rect x='3' y='1' width='7' height='12' />
            <rect x='3' y='17' width='7' height='6' />
            <rect x='14' y='1' width='7' height='6' />
            <rect x='14' y='11' width='7' height='12' />
          </svg>
          <span className='ml-2 text-xl font-bold uppercase tracking-wide text-gray-800'>
            Silvia Naim
          </span>
        </Link>
        <ul className='hidden items-center space-x-8 lg:flex'>
          {links.map(({ href, label }, index) => (
            <li key={index}>
              <Link
                href={href}
                aria-label={label}
                title={label}
                className={clsx(
                  'nav-link nav-link-ltr hover:text-deep-purple-accent-400 text-base font-medium tracking-wide text-gray-700 transition-colors duration-200',
                  {
                    'nav-link-active': currentRoute === href,
                  }
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='hidden items-center space-x-8 lg:flex'>
          <div className='pb-10.02 pr-6.68 inline-flex h-10 w-36 items-center justify-center overflow-hidden rounded-full bg-blue-200 bg-opacity-80 pl-7 pt-2 shadow-md'>
            <div className='leading-6.01 h-6 w-24 break-words text-base font-semibold text-blue-900'>
              Boook a call
            </div>
          </div>
        </ul>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute left-0 top-0 w-full'>
              <div className='rounded border bg-white p-5 shadow-sm'>
                <div className='mb-4 flex items-center justify-between'>
                  <div>
                    <a
                      href='/'
                      aria-label='Company'
                      title='Company'
                      className='inline-flex items-center'
                    >
                      <svg
                        className='text-deep-purple-accent-400 w-8'
                        viewBox='0 0 24 24'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        stroke='currentColor'
                        fill='none'
                      >
                        <rect x='3' y='1' width='7' height='12' />
                        <rect x='3' y='17' width='7' height='6' />
                        <rect x='14' y='1' width='7' height='6' />
                        <rect x='14' y='11' width='7' height='12' />
                      </svg>
                      <span className='ml-2 text-xl font-bold uppercase tracking-wide text-gray-800'>
                        Company
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='focus:shadow-outline -mr-2 -mt-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    {links.map(({ href, label }, index) => (
                      <li key={index}>
                        <Link
                          href={href}
                          aria-label={label}
                          title={label}
                          className='hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200'
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default Header;
