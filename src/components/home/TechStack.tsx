import Image from 'next/image';
import React from 'react';

const TechStack = () => {
  return (
    <div className='relative flex flex-col items-center overflow-hidden py-16 dark:bg-gray-800 md:py-20'>
      <div className='container relative z-[1] m-auto px-6 md:px-12'>
        <div className='m-auto text-center md:w-8/12 lg:w-6/12'>
          <h2 className='text-xl font-bold text-gray-800 dark:text-white md:text-2xl'>
            Riding the Favorite{' '}
            <span className='relative'>
              Tech Stack
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
          </h2>
        </div>
        <div className='m-auto mt-12 md:w-11/12 lg:w-8/12 xl:w-7/12'>
          <div className='flex flex-wrap justify-center gap-6'>
            <div className='group rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 hover:bg-opacity-10 dark:border-gray-600'>
              <Image
                src='images/stack/react.svg'
                className='h-10 w-10 rounded-full contrast-100 transition group-hover:contrast-0'
                loading='lazy'
                alt='logo airbnb'
                height={40}
                width={40}
              />
            </div>
            <div className='group rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 hover:bg-opacity-10 dark:border-gray-600'>
              <Image
                src='images/stack/next.svg'
                className='h-10 w-10 rounded-full contrast-100 transition group-hover:contrast-0'
                loading='lazy'
                alt='logo microsoft'
                height={40}
                width={40}
              />
            </div>

            <div className='group rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 hover:bg-opacity-10 dark:border-gray-600'>
              <Image
                src='images/stack/typescript.svg'
                className='h-10 w-10 rounded-full contrast-100 transition group-hover:contrast-0'
                loading='lazy'
                alt='logo bissell'
                height={40}
                width={40}
              />
            </div>
            <div className='group rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 hover:bg-opacity-10 dark:border-gray-600'>
              <Image
                src='images/stack/tailwind.svg'
                className='h-10 w-10 rounded-full contrast-100 transition group-hover:contrast-0'
                loading='lazy'
                alt='logo bissell'
                height={40}
                width={40}
              />
            </div>
            <div className='group rounded-xl border border-gray-200 bg-white bg-opacity-5 px-4 py-2 hover:bg-opacity-10 dark:border-gray-600'>
              <Image
                src='images/stack/node-js.svg'
                className='h-10 w-10 rounded-full contrast-100 transition group-hover:contrast-0'
                loading='lazy'
                alt='logo automatic'
                height={40}
                width={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
