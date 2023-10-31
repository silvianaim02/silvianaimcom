import BlurImage from '@/components/images/BlurImage';
import React from 'react';

const page = () => {
  return (
    <div className='pb-6 pt-16'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='mb-12 space-y-2 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 dark:text-white md:text-4xl'>
            Sharing is Caring
          </h2>
          <p className='text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>

        <div className='lg:mx-auto lg:w-3/4 xl:w-2/4'>
          <div className='group relative -mx-4 rounded-3xl border border-transparent bg-white p-6 shadow-2xl shadow-transparent transition duration-300 hover:z-10 hover:border-gray-100 hover:shadow-gray-600/10 dark:bg-transparent dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:-mx-8 sm:flex sm:gap-8 sm:p-8'>
            <div className='overflow-hidden rounded-3xl transition-all duration-500 group-hover:rounded-xl sm:w-2/6'>
              <BlurImage
                image={
                  'https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                }
                className='h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-full'
                width={1000}
                height={667}
                alt='art cover'
              />
            </div>

            <div className='sm:w-4/6 sm:p-2 sm:pl-0'>
              <span className='mb-2 mt-4 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
                Jul 27 2022
              </span>
              <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                Provident de illo eveniet commodi fuga fugiat laboriosam
                expedita.
              </h3>
              <p className='my-6 text-gray-600 dark:text-gray-300'>
                Laudantium in, voluptates ex placeat quo harum aliquam totam,
                doloribus eum impedit atque...
              </p>

              <div className='flex gap-4'>
                <a
                  href='#'
                  className='text-primary hover:bg-primary rounded-full border border-gray-100 px-3 py-1 text-sm font-medium transition duration-300 hover:border-transparent hover:text-white dark:border-gray-700 dark:text-gray-300'
                >
                  Tailwindcss
                </a>
                <a
                  href='#'
                  className='text-primary hover:bg-primary rounded-full border border-gray-100 px-3 py-1 text-sm font-medium transition duration-300 hover:border-transparent hover:text-white dark:border-gray-700 dark:text-gray-300'
                >
                  VueJS
                </a>
              </div>
            </div>
          </div>
          <div className='group relative -mx-4 rounded-3xl border border-transparent bg-white p-6 shadow-2xl shadow-transparent transition duration-300 hover:z-10 hover:border-gray-100 hover:shadow-gray-600/10 dark:bg-transparent dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:-mx-8 sm:flex sm:gap-8 sm:p-8'>
            <div className='overflow-hidden rounded-3xl transition-all duration-500 group-hover:rounded-xl sm:w-2/6'>
              <BlurImage
                image={
                  'https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                }
                className='h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-full'
                width={1000}
                height={667}
                alt='art cover'
              />
            </div>

            <div className='sm:w-4/6 sm:p-2 sm:pl-0'>
              <span className='mb-2 mt-4 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
                Jul 27 2022
              </span>
              <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                Provident de illo eveniet commodi fuga fugiat laboriosam
                expedita.
              </h3>
              <p className='my-6 text-gray-600 dark:text-gray-300'>
                Laudantium in, voluptates ex placeat quo harum aliquam totam,
                doloribus eum impedit atque...
              </p>

              <div className='flex gap-4'>
                <a
                  href='#'
                  className='text-primary hover:bg-primary rounded-full border border-gray-100 px-3 py-1 text-sm font-medium transition duration-300 hover:border-transparent hover:text-white dark:border-gray-700 dark:text-gray-300'
                >
                  Tailwindcss
                </a>
                <a
                  href='#'
                  className='text-primary hover:bg-primary rounded-full border border-gray-100 px-3 py-1 text-sm font-medium transition duration-300 hover:border-transparent hover:text-white dark:border-gray-700 dark:text-gray-300'
                >
                  VueJS
                </a>
              </div>
            </div>
          </div>
          <div className='group relative -mx-4 rounded-3xl border border-transparent bg-white p-6 shadow-2xl shadow-transparent transition duration-300 hover:z-10 hover:border-gray-100 hover:shadow-gray-600/10 dark:bg-transparent dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:-mx-8 sm:flex sm:gap-8 sm:p-8'>
            <div className='overflow-hidden rounded-3xl transition-all duration-500 group-hover:rounded-xl sm:w-2/6'>
              <BlurImage
                image={
                  'https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                }
                className='h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-full'
                width={1000}
                height={667}
                alt='art cover'
              />
            </div>

            <div className='sm:w-4/6 sm:p-2 sm:pl-0'>
              <span className='mb-2 mt-4 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
                Jul 27 2022
              </span>
              <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                Provident de illo eveniet commodi fuga fugiat laboriosam
                expedita.
              </h3>
              <p className='my-6 text-gray-600 dark:text-gray-300'>
                Laudantium in, voluptates ex placeat quo harum aliquam totam,
                doloribus eum impedit atque...
              </p>

              <div className='flex gap-4'>
                <a
                  href='#'
                  className='text-primary hover:bg-primary rounded-full border border-gray-100 px-3 py-1 text-sm font-medium transition duration-300 hover:border-transparent hover:text-white dark:border-gray-700 dark:text-gray-300'
                >
                  Tailwindcss
                </a>
                <a
                  href='#'
                  className='text-primary hover:bg-primary rounded-full border border-gray-100 px-3 py-1 text-sm font-medium transition duration-300 hover:border-transparent hover:text-white dark:border-gray-700 dark:text-gray-300'
                >
                  VueJS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
