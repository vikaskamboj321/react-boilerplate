/* eslint-disable */
const path = require(`path`);
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/style/global.scss',
        ],
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Util': path.resolve(__dirname, 'src/utils'),
      '@Store': path.resolve(__dirname, 'src/store'),
      '@Style': path.resolve(__dirname, 'src/style'),
    }
  },
};