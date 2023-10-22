import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
      className={`flex-start flex h-[35px] w-[74px] rounded-[50px] bg-zinc-100 p-[5px] text-white shadow-inner hover:cursor-pointer ${
        theme === 'dark' && 'place-content-end bg-zinc-700'
      }`}
    >
      <motion.div
        className='flex h-[25px] w-[25px] items-center justify-center rounded-full bg-black/90'
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {theme === 'dark' ? (
            <RiSunFill className='h-6 w-6 text-yellow-300' />
          ) : (
            <RiMoonClearFill className='h-6 w-6 text-slate-200' />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DarkModeSwitch;
