/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cyberspacedigital.in', // Remove 'https://' from hostname
        pathname: '/icons/**',
      },
    ],
  },
};

module.exports = nextConfig;