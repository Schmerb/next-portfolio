/**
 *
 * next config
 *
 *  */

require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
// const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

const WebpackConfig = {
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    };
    // config.
    return config;
  },
  trailingSlash: true,
  // resolutions: {
  //   webpack: '~4.43.0',
  // },
};

// const UseWithCss = withCSS();
const UseWithImages = withImages(WebpackConfig);

module.exports = UseWithImages;
