const path = require('path');
const fs = require('fs');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//dev
const webpack = require('webpack');
const envVariables = require('bwork-libs/webpack-config/env-variables');

let config = {
  devtool: 'eval-source-map',
  devServer: {
    port: 3006,
    proxy: {
      '/api': 'http://localhost:4001',
      '/static': 'http://localhost:4001',
    },
    stats: {
      entrypoints: false,
      modules: false,
      colors: true,
    },
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 
          loader: 'babel-loader',
        },
      },
      /*      {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['eslint-loader'],
            },*/
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    envVariables,
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/lock.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ManifestPlugin({ serialize: () => fs.readFileSync('./public/manifest.json') }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, './src/serviceWorker.js'),
    //   excludes: ['**/.*', '**/*.map', '*.html'],
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      'bwork-libs': path.join(__dirname, '..', 'bwork-libs', 'src'),
    },
  },
};

module.exports = config