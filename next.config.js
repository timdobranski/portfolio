/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Rings',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Rings/About',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/Rings/Connect',
        destination: '/connect',
        permanent: true,
      },
      {
        source: '/Rings/Resume',
        destination: '/resume',
        permanent: true,
      },
      {
        source: '/Rings/Projects',
        destination: '/apps',
        permanent: true,
      },
      {
        source: '/Rings/Projects/:projectName',
        destination: '/apps/:projectName',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
