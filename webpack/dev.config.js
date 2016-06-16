var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {

  devtool: 'cheap-eval-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/dev-server',
    path.join(__dirname, '../src/main.js'),
    path.join(__dirname, '../src/less/main.less')
  ],

  output: {
    path: path.join(__dirname, '../www'),
    filename: `app.js`,
    publicPath: '/'
  },

  plugins: [
    new CopyWebpackPlugin([{ from: path.join(__dirname, '../resources'), to: path.join(__dirname, '../www/resources')}],
    { copyUnmodified: true }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      inject: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BABEL_ENV: "'development/client'",
        NODE_ENV: "'development'"
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.less$/, loaders: ['style-loader', 'css-loader?-url,-import', 'less-loader'] }
    ]
  },

  devServer: {
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    inline: true,
    contentBase: path.join(__dirname, '../www'),
    publicPath: '/',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

};

module.exports = config;
