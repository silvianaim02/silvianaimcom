import React from 'react';

const page = () => {
  return (
    <div className='min-h-[600px] pb-6 pt-16'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='mb-10 flex items-center gap-6 space-y-2 lg:mx-auto lg:w-6/12'>
          <img
            className='h-16 w-16 rounded-full md:h-20 md:w-20'
            src='https://silvianaim02.github.io/static/media/avatar.17ebff11.jpg'
            alt='Rounded avatar'
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
