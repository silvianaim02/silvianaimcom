import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
  const emailAddress = 'silvianaim68@gmail.com';
  return (
    <footer>
      <div className='top-border-header'></div>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-12 sm:max-w-xl md:max-w-full md:flex-row md:px-24 lg:max-w-screen-xl lg:px-8'>
        <p className='mb-8 text-center text-sm text-gray-600 dark:text-[#e4e4e4] md:mb-0 md:text-left'>
          Made with ❤️ By {` `}
          <Link href='/about' className='font-semibold'>
            Silvia Naim
          </Link>{' '}
          © Copyright 2023.
        </p>
        <div className='flex items-center space-x-6'>
          <a href={`mailto:${emailAddress}`}>
            <span className='text-2xl'>
              <MdEmail />
            </span>
          </a>
          <a target='_blank' href='https://github.com/silvianaim02'>
            <span className='text-2xl'>
              <AiFillGithub />
            </span>
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/silvianaim02/'>
            <span className='text-2xl text-blue-700'>
              <AiFillLinkedin />
            </span>
          </a>
          <a target='_blank' href='https://t.me/silvianaim02'>
            <span className='text-2xl text-blue-500'>
              <FaTelegramPlane />
            </span>
          </a>
          <a
            target='_blank'
            href='https://t.https://medium.com/@silvianaim02/silvianaim02'
          >
            <span className='text-2xl text-blue-500'>
              <BsMedium />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
