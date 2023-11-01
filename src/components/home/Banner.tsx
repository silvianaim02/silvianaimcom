import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const Banner = () => {
  return (
    <>
      <div
        data-aos='fade-zoom-in'
        data-aos-easing='ease-in-back'
        data-aos-delay='300'
        className='flex flex-wrap items-center justify-center'
      >
        <div className=' w-full px-4 py-20 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8'>
          <div className='hero-content mx-auto max-w-[780px] text-center'>
            <h1 className='mb-8 text-3xl font-bold leading-snug text-gray-800 dark:text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug'>
              Welcome to <span className='text-header-gradient'>Silvia’s</span>{' '}
              <span className='relative'>
                Journey!
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='249'
                  height='22'
                  viewBox='0 0 249 22'
                  fill='currentColor'
                  className='absolute left-0 top-2/3 h-6 w-full text-[#0cd3ff] text-opacity-75 dark:text-[#0369a1]'
                >
                  <path d='M247.564 18.5807C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97395 208.996 8.57031 200.846 7.46093C186.542 5.51302 172.169 4.08854 157.79 3.01562C126.033 0.645827 94.0929 0.0338481 62.3387 2.36979C42.1785 3.85416 22.008 5.90885 2.32917 10.8463C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7083C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0807 99.2274 10.6719 118.484 10.9557C142.604 11.3125 166.719 12.8333 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0807 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5807Z'></path>
                </svg>
              </span>
            </h1>
            <p className='mx-auto mb-10 max-w-[600px] text-base text-gray-600 dark:text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed'>
              I’m Silvia Naim, a software developer (frontend) based on
              Indonesia who love crafting user-friendly web-application. In
              other side, I also curious about general technology 💻. Happy if
              you visit here!
            </p>
            <ul className='mb-10 flex flex-wrap items-center justify-center'>
              <li>
                <Link
                  href='/articles'
                  className='text-dark hover:text-primary inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2f7cf0] to-[#0369a1]  px-6 py-4 text-center text-base font-medium text-white transition duration-300 ease-in-out hover:shadow-lg dark:bg-white sm:px-10'
                >
                  Read My Articles
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className='flex items-center px-6 py-4 text-base font-medium text-[#0369a1] transition duration-300 ease-in-out hover:opacity-70 dark:text-[#0cd3ff] dark:hover:opacity-90 sm:px-10'
                >
                  See my portfolio
                  <span className='pl-2'>
                    <svg
                      width='20'
                      height='8'
                      viewBox='0 0 20 8'
                      className='fill-current'
                    >
                      <path d='M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z' />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
            <div className='sm:dHctZ2FwLTQ flex items-center justify-center gap-7'>
              <a
                target='_blank'
                className='hover:dHctYmctc2xhdGUtNTA flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-transform duration-200 dark:border-gray-700'
                aria-label='Follow on Dribbble'
                href='https://github.com/silvianaim02'
              >
                <span className='text-2xl'>
                  <AiFillGithub />
                </span>
              </a>
              <a
                target='_blank'
                className='hover:dHctYmctc2xhdGUtNTA flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-transform duration-200 dark:border-gray-700'
                aria-label='Follow on Dribbble'
                href='https://www.linkedin.com/in/silvianaim02/'
              >
                <span className='text-2xl text-blue-700'>
                  <AiFillLinkedin />
                </span>
              </a>
              <a
                target='_blank'
                className='hover:dHctYmctc2xhdGUtNTA flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-transform duration-200 dark:border-gray-700'
                aria-label='Follow on Dribbble'
                href='https://t.me/silvianaim02'
              >
                <span className='text-2xl text-blue-500'>
                  <FaTelegramPlane />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
