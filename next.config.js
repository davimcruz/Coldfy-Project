/** @type {import('next').NextConfig} */

const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssLoaderOptions: {
    minimize: true, 
  },
});

const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"], 
  },
};

module.exports = nextConfig;
