'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      easing: 'ease-out',
      duration: 500,
    });
  }, []);

  return null;
};
