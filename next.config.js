/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/beachbums',
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  images: {
    loader: 'imgix',
    path: 'https://hodlercon.com',
    layoutRaw: true,
  },
};
