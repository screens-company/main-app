'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ExtractSASS = new ExtractTextPlugin('styles/bundle.[hash].css');

module.exports = (options) => {
  const dest = Path.join(__dirname, 'dist');
  const port = 3001;
  const rootPath = Path.join(__dirname);
  
  let webpackConfig = {
    devtool: 'cheap-eval-source-map',
    entry: [
      './src/index.tsx'
    ],
    output: {
      path: dest,
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: false
      })
    ],
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   exclude: /(node_modules)/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['env']
        //     }
        //   }
        // },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              // getCustomTransformers: path.join(
              //   __dirname,
              //   './webpack-ts-transformers.js',
              // ),
              silent: false,//normalizedEnv.SILENT,
              transpileOnly: true,//localTarget,
            },
          },
        },
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        '@': Path.join(rootPath, 'src'),
      },
    },
  };

  webpackConfig.plugins.push(
    new Webpack.HotModuleReplacementPlugin()
  );

  // webpackConfig.module.rules.push({
  //   test: /\.s?css$/i,
  //   use: ['style-loader', 'css-loader?sourceMap=true', {
  //     loader: 'sass-loader',
  //     options: { includePaths: [Path.join(__dirname, 'src/styles')] }
  //   }]
  // });

  webpackConfig.devServer = {
    contentBase: '/',
    hot: true,
    port,
    inline: true
  };

  return webpackConfig;
};
