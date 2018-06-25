const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'web',
  entry: {
    main: path.join(__dirname, '/client/index.jsx'),
  },
  output: {
    filename: 'index.min.js',
    path: path.join(__dirname, '/public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: 'presets[]=env,presets[]=react,presets[]=stage-2',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
