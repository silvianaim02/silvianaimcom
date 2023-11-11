import BlurImage from '@/components/images/BlurImage';
import React from 'react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import { DocumentRenderer } from '@keystatic/core/renderer';

import Link from 'next/link';

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
                {/* <div className='my-6 limited-text text-gray-600 dark:text-gray-300'>
                  <DocumentRenderer document={await article.entry.content()} />
                </div> */}

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
