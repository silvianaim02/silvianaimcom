import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-12 sm:max-w-xl md:max-w-full md:flex-row md:px-24 lg:max-w-screen-xl lg:px-8'>
      <p className='mb-8 text-center text-sm text-gray-600 dark:text-[#e4e4e4] md:mb-0 md:text-left'>
        Silvia Naim © Copyright 2023. All Rights Reserved.
      </p>
      <div className='flex items-center space-x-6'>
        <a href='https://github.com/silvianaim02'>
          <span className='text-2xl'>
            <AiFillGithub />
          </span>
        </a>
        <a href='https://www.linkedin.com/in/silvianaim02/'>
          <span className='text-2xl text-blue-700'>
            <AiFillLinkedin />
          </span>
        </a>
        <a href='https://t.me/silvianaim02'>
          <span className='text-2xl text-blue-500'>
            <FaTelegramPlane />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
