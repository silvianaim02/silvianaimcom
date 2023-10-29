import React from 'react';

const RoundedImage = ({ imageUrl }: any) => {
  return (
    <div className='h-32 w-32 overflow-hidden rounded-full bg-blue-300'>
      <img
        src={imageUrl}
        alt='Gambar Bulat'
        className='h-full w-full object-cover'
      />
    </div>
  );
};

export default RoundedImage;
