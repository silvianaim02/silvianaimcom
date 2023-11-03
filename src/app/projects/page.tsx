import BlurImage from '@/components/images/BlurImage';
import React from 'react';
import { projectDatas } from '@/utils/projectData';
import { FiExternalLink } from 'react-icons/fi';

const page = () => {
  return (
    <div className='pb-6 pt-16'>
      <div className='mx-auto px-4 text-gray-600 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8'>
        <div className='mb-12 space-y-2 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 dark:text-white md:text-4xl'>
            Projects
          </h2>
          <p className='text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
            These are my past projects, including personal experiment, a list of
            freelance projects if they are publicly available, or just a fun
            project but I wanted to include it.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projectDatas?.map((data, index) => (
            <div
              key={index}
              className='group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-8'
            >
              <div className='relative overflow-hidden rounded-xl'>
                <BlurImage
                  image={data.image}
                  className='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105'
                  width={1000}
                  height={667}
                  alt='Project'
                />
              </div>
              <div className='relative mt-4'>
                <div className='flex justify-between'>
                  <a target='_blank' href={data.url} className='pointer'>
                    <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                      {data.title}
                    </h3>
                  </a>
                  <a
                    target='_blank'
                    href={data.url}
                    className='pointer icon-blue-gradient text-2xl'
                  >
                    {data.url ? <FiExternalLink /> : null}
                  </a>
                </div>
                <p className='mt-4 text-gray-600 dark:text-gray-300'>
                  {data.body}
                </p>
                <a className='mt-4' href='#'>
                  <span className='text-primary'>{data.techStack}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
