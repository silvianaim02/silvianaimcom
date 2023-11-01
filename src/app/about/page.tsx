import React from 'react';
import BlurImage from '@/components/images/BlurImage';

const page = () => {
  return (
    <div
      data-aos='fade-zoom-in'
      data-aos-easing='ease-in-back'
      data-aos-delay='300'
      className='min-h-[600px] pb-6 pt-16'
    >
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='mb-10 flex items-center gap-6 space-y-2 lg:mx-auto lg:w-6/12'>
          <BlurImage
            image={'/images/silvia-naim.png'}
            className='rounded-full'
            width={80}
            height={80}
            alt='Silvia Naim Profile'
          />
          <div>
            <h2 className='text-xl font-bold text-gray-800 dark:text-white md:text-2xl'>
              Silvia Naim
            </h2>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Software Developer (frontend). Code Learner. write to learn &
              share.
            </p>
          </div>
        </div>
        <p className='mb-1 text-justify text-gray-900 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
          Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
          debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
        </p>
        <p className='mb-1 text-justify text-gray-900 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
          Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
          debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
        </p>
      </div>
    </div>
  );
};

export default page;
