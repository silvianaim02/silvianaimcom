import React from 'react';
import type { Metadata } from 'next';
import BlurImage from '@/components/images/BlurImage';
import siteMetadata from '@/utils/siteMetaData';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: 'About', // a default is required when creating a template
  },
  description:
    'I’m a Frontend developer Based on Indonesia, Learning and working in the IT industry, especially when it comes to making software.',
};

const page = () => {
  return (
    <>
      <div className='min-h-[400px] pb-6 pt-16'>
        <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
          <div className='mb-10 flex items-center gap-6 space-y-2 lg:mx-auto lg:w-6/12'>
            <BlurImage
              image={'/images/silvianaim.jpeg'}
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
                Software Developer (frontend)
              </p>
            </div>
          </div>
          <p className='mb-4 text-justify text-gray-900 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
            Hi there👋, I’m really happy you came to this website!
          </p>
          <p className='mb-4 text-justify text-gray-900 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
            My name is Silvia Naim, and I’m a Frontend developer. You can call
            me Naim. I’m very excited about learning and working in the IT
            industry, especially when it comes to making software.
          </p>
          <p className='mb-4 text-justify text-gray-900 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
            Actually, I first have known into web development in 2020. But later
            on, I wanted to learn about other things in the IT world like IoT,
            Cloud Computing, and more while being a college. After a while, In
            2022 I realized that I’m better suited for Software Development,
            especially in the frontend. Because of my decision, I started
            seriously diving into frontend development and sometimes also tried
            on backend work.
          </p>
          <p className='mb-4 text-justify text-gray-900 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
            I created this website intentionally to write blogs and make it
            easier for me to document something useful. I hope that I can share
            experiences or anything that can be useful for other people
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
