/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // https://avatars.githubusercontent.com/u/2713445?v=4
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/*/**'
      }
    ]
  }
};

module.exports = nextConfig;
