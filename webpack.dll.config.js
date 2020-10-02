const path = require('path');
const webpack = require('webpack');
const TersetJsPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
  optimization: {
    minimizer: [
      new TersetJsPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'src/[name].[hash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
};
