import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark'; // Evaluasi hanya satu kali

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSwitch = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start flex h-[35px] w-[74px] rounded-[50px] p-[5px] text-white shadow-inner hover:cursor-pointer ${
        mounted
          ? isDarkTheme
            ? 'place-content-end bg-zinc-700'
            : 'bg-zinc-100'
          : 'animate-pulse bg-zinc-100'
      }`}
    >
      <motion.div
        className={`flex h-[25px] w-[25px] items-center justify-center rounded-full ${
          mounted ? 'bg-black/90' : null
        } `}
        layout
        // transition={spring}
      >
        <motion.div
        // whileTap={{ rotate: 360 }}
        >
          {mounted ? (
            <>
              {isDarkTheme ? (
                <RiSunFill className='h-6 w-6 text-yellow-300' />
              ) : (
                <RiMoonClearFill className='h-6 w-6 text-slate-200' />
              )}
            </>
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DarkModeSwitch;
