'use client';
import { useState } from 'react';
import Image from 'next/image';

interface BlurImageProps {
  image: string;
  className: string;
  width: number;
  height: number;
  alt: string;
}

const BlurImage: React.FC<BlurImageProps> = ({
  image,
  className,
  width,
  height,
  alt,
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`${className} bg-gray-200 dark:bg-gray-700`}>
      <Image
        loading='lazy'
        alt={alt}
        src={image}
        width={width}
        height={height}
        className={`
              ${className} 
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? 'scale-110 blur-3xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
