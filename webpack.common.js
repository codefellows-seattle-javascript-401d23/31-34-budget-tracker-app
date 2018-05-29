'use strict';

require('dotenv').config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename: '[name].[hash].css',
  path: `${__dirname}/build`,
  publicPath: process.end.CDN_URL,
};
