/** @type {import('next').NextConfig} */

// const path = require('path');
const UnoCSS = require("@unocss/webpack").default;

const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  swcMinify: true,
  // reactStrictMode: true,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  webpack(config) {
    config.cache = false;
    config.plugins.push(
      UnoCSS() // <--
    );
    return config;
  },
};

module.exports = nextConfig;
