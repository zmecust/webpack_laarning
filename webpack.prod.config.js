var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.publicPath = '/dist/';
config.output.filename = '[name].[hash].js';                 // 带hash值的入口js名称
config.output.chunkFilename = '[name].[hash].chunk.js';      // 带hash值的路由js名称

config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin({
    filename: '[name].[hash].css',
    disable: false,
    allChunks: true
  }),
  new webpack.optimize.SplitChunksPlugin({
    name: 'vendors',
    filename: 'vendors.[hash].js'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new HtmlWebpackPlugin({
    filename: './index_prod.html',
    template: './index.html',
    inject: true
  })
]);

module.exports = config;
