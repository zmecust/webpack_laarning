var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.devtool = '#source-map';                        // source-map
config.output.publicPath = '/';                        // 资源路径
config.output.filename = '[name].js';                  // 入口js命名
config.output.chunkFilename = '[name].chunk.js';       // 路由js命名

config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
    // disable: true
  }),
  new webpack.optimize.SplitChunksPlugin({
    name: 'vendors',
    filename: 'vendors.js'
  }),
  new HtmlWebpackPlugin({
    filename: './index.html',
    template: './index.html',
    inject: true
  })
]);

module.exports = config;
