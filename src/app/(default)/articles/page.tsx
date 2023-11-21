import BlurImage from '@/components/images/BlurImage';
import React from 'react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';

// 1. Create a reader
const reader = createReader(process.cwd(), keystaticConfig);

const page = async () => {
  // 2. Read the "articles" collection
  const articles = await reader.collections.articles.all();
  console.log(articles);

  return (
    <div className='pb-6 pt-16'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='mb-12 space-y-2 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 dark:text-white md:text-4xl'>
            Articles
          </h2>
          <p className='text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
            Random Thoughts: Some carefully selected articles with ideas about
            programming and personal development.
          </p>
        </div>
        {articles.length === 0 && (
          <div className='mb-32 mt-20'>
            <div className='flex justify-center text-xl'>
              <svg
                className='h-24 w-24 text-gray-500 dark:text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                x='0px'
                y='0px'
                viewBox='0 0 96 120'
                enable-background='new 0 0 96 96'
              >
                <g>
                  <polygon
                    fill='currentColor'
                    points='92.662,64.486 73.232,47 22.768,47 3.338,64.486 0.662,61.514 21.232,43 74.768,43 95.338,61.514     '
                  />
                </g>
                <g>
                  <path
                    fill='currentColor'
                    d='M90,96H6c-3.309,0-6-2.691-6-6V61h32v2c0,4.963,4.037,9,9,9h14c4.963,0,9-4.037,9-9v-2h32v29   C96,93.309,93.309,96,90,96z M4,65v25c0,1.103,0.897,2,2,2h84c1.103,0,2-0.897,2-2V65H67.847C66.882,71.223,61.488,76,55,76H41   c-6.488,0-11.882-4.777-12.847-11H4z'
                  />
                </g>
                <g>
                  <rect
                    x='23.981'
                    y='20.5'
                    transform='matrix(0.5369 0.8437 -0.8437 0.5369 33.1077 -15.3114)'
                    fill='currentColor'
                    width='13.038'
                    height='4'
                  />
                </g>
                <g>
                  <rect
                    x='64.5'
                    y='15.981'
                    transform='matrix(0.8437 0.5368 -0.5368 0.8437 22.4731 -32.1821)'
                    fill='currentColor'
                    width='4'
                    height='13.038'
                  />
                </g>
                <g>
                  <rect
                    x='46'
                    y='14'
                    fill='currentColor'
                    width='4'
                    height='13'
                  />
                </g>
              </svg>
            </div>
            <p className='text-center text-gray-500 dark:text-gray-400'>
              Silvia hasn&apos;t written any articles yet.
            </p>
          </div>
        )}

        {articles.map(async (article, index: any) => (
          <div
            key={`/articles/${article.slug}`}
            className='lg:mx-auto lg:w-3/4 xl:w-2/4'
          >
            <div className='group relative -mx-4 rounded-3xl border border-transparent bg-white p-6 shadow-2xl shadow-transparent transition duration-300 hover:z-10 hover:border-gray-100 hover:shadow-gray-600/10 dark:bg-transparent dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:-mx-8 sm:flex sm:gap-8 sm:p-8'>
              <div className='overflow-hidden rounded-3xl transition-all duration-500 group-hover:rounded-xl sm:w-2/6'>
                <BlurImage
                  image={
                    article.entry.thumbnail ? article.entry.thumbnail : null
                  }
                  className='h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-full'
                  width={1000}
                  height={667}
                  alt='art cover'
                />
              </div>

              <div className='sm:w-4/6 sm:p-2 sm:pl-0'>
                <span className='mb-2 mt-4 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
                  {article.entry.date}
                </span>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                  <Link href={`/articles/${article.slug}`}>
                    {article.entry.title}
                  </Link>
                </h3>
                <p className='limited-text my-6 text-gray-600 dark:text-gray-300'>
                  {article.entry.summary}
                </p>
                <div className='flex gap-4'>
                  {article.entry.tags?.map(async (tag, tagIndex: any) => (
                    <a
                      key={tagIndex}
                      href='#'
                      className='text-primary hover:bg-primary rounded-full border border-gray-100 px-3 py-1 text-sm font-medium transition duration-300 hover:border-transparent hover:text-white dark:border-gray-700 dark:text-gray-300'
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
