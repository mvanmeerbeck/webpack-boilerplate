const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'eniblock1.bundle.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'eniblock1',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000, 
    },  
  },
  {
    mode: 'development',
    entry: './src/index2.js',
    output: {
      filename: 'eniblock2.bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: {
        name: 'eniblock2',
        type: 'var',
        export: 'default',
      },
      globalObject: 'this',
    }, 
  },
];
