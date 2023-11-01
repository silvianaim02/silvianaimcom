'use client';

import React, { useEffect, useState } from 'react';
import NextImage from '../images/NextImage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import DarkModeSwitch from '../button/DarkModeSwitch';
import { motion } from 'framer-motion';
import { MenuButton } from '../button/MenuButton';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark'; // Evaluasi hanya satu kali

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentRoute = usePathname();

  return (
    <div className='sticky top-0 z-10 mx-auto bg-white px-4 py-6 dark:bg-gray-800 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <Link
            href='/'
            aria-label='Company'
            title='Company'
            className='inline-flex items-center'
          >
            <span className='text-header-gradient ml-2 text-xl font-bold uppercase tracking-wide'>
              Silvia Naim
            </span>
          </Link>
          <ul className='hidden items-center space-x-8 lg:flex'>
            <DarkModeSwitch />
          </ul>
        </div>
        <ul className='hidden items-center space-x-8 lg:flex'>
          {links.map(({ href, label }, index) => (
            <li key={index}>
              <Link
                href={href}
                aria-label={label}
                title={label}
                className={clsx(
                  'nav-link nav-link-ltr hover:text-deep-purple-accent-400 text-base font-medium tracking-wide text-gray-700 transition-colors duration-200 dark:text-slate-200',
                  {
                    'nav-link-active-dark':
                      currentRoute === href && isDarkTheme,
                    'nav-link-active': currentRoute === href && !isDarkTheme,
                  }
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex justify-center gap-2 lg:hidden'>
          <DarkModeSwitch />
          <MenuButton
            isOpen={isMenuOpen}
            color={mounted ? (isDarkTheme ? '#ffffff' : '#000000') : '#000000'}
            lineProps={{ strokeLinecap: 'round' }}
            width={35}
            height={35}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:shadow-outline hover:bg-deep-purple-50 relative z-50 rounded-full p-3 shadow-inner transition  duration-200 hover:cursor-pointer focus:bg-gray-200 focus:outline-none ${
              isMenuOpen
                ? 'bg-white dark:bg-gray-800'
                : ' bg-zinc-100 dark:bg-zinc-700 dark:text-white'
            }`}
          />
        </div>
      </div>
      {/* Modal */}
      {isMenuOpen && (
        <div className='relative z-40'>
          <div
            className='fixed inset-0 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50'
            id='my-modal'
          ></div>
          <div className='absolute left-0 top-0 mt-6 w-full'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0, duration: 1 }}
              className='rounded-2xl bg-white px-6 py-7 shadow-xl shadow-gray-600/10 dark:bg-gray-800 dark:shadow-black/10'
            >
              <nav>
                <ul className='space-y-4'>
                  {links.map(({ href, label }, index) => (
                    <li key={index}>
                      <Link
                        href={href}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={label}
                        title={label}
                        className='hover:text-deep-purple-accent-400 font-semibold tracking-wide text-gray-700 transition-colors duration-200 dark:text-slate-200'
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default Header;
