import BlurImage from '../images/BlurImage';

const Image = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => {
  return (
    <div className='flex flex-col items-center'>
      <BlurImage
        image={`${src}`}
        alt={alt}
        className='rounded-md'
        width={700}
        height={700}
      />
      {caption && <p className='mt-0 text-center text-sm'>{caption}</p>}
    </div>
  );
};

export default Image;
