var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {

  devtool: false,

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: [
    path.join(__dirname, '../src/main.js'),
    path.join(__dirname, '../src/less/main.less')
  ],

  output: {
    path: path.join(__dirname, '../www'),
    filename: `app.js`
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: {
        except: ['exports', 'require']
      },
      compressor: {
       warnings: false
     },
     output: {
       comments: false
     }
   }),
   new webpack.DefinePlugin({
     'process.env': {
       NODE_ENV: "'production'"
     }
   }),
   new CopyWebpackPlugin([
     { from: path.join(__dirname, '../resources'), to: path.join(__dirname, '../www/resources') }
   ]),
   new HtmlWebpackPlugin({
     template: path.join(__dirname, '../src/index.html'),
     inject: false
   }),
   new webpack.optimize.OccurenceOrderPlugin(),
   new ExtractTextPlugin(`style.css`)
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-url,-import!less-loader') }
    ]
  }

};

module.exports = config;
