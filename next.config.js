/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',

      // Spotify Album
      'i.scdn.co',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
