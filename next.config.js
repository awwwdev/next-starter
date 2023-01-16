/** @type {import('next').NextConfig} */

// const path = require('path');
const UnoCSS = require("@unocss/webpack").default;

const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // webpack(config, { dev, isServer }) {
  webpack(config) {
    config.cache = false;
    config.plugins.push(
      UnoCSS() // <--
    );

    // Use preact instead of react to minimize the size of the website
    // Note, preact is only enabled for production builds (`next build`)
    // if (!dev && !isServer) {
    //   config.resolve.alias = {
    //     ...config.resolve.alias,
    //     "react/jsx-runtime.js": "preact/compat/jsx-runtime",
    //     react: "preact/compat",
    //     "react-dom/test-utils": "preact/test-utils",
    //     "react-dom": "preact/compat",
    //   };
    // }

    // config.module.rules.push({
    //   test: /\.svg$/i,
    //   issuer: /\.[jt]sx?$/,
    //   use: ['@svgr/webpack'],
    // });
    return config;
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
}

module.exports = nextConfig
