'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options, callback) => {
  const dest = Path.join(__dirname, 'dist');
  const port = 3001;
  const rootPath = Path.join(__dirname);
  const STATIC_URL = '/static';
  
  let webpackConfig = {
    mode: process.env.NODE_ENV,
    // devtool: 'cheap-eval-source-map',
    entry: [
      './src/index.tsx'
    ],
    output: {
      publicPath: process.env.NODE_ENV === 'production' ? STATIC_URL : undefined,
      path: dest,
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: false,
        STATIC_URL,
      }),
      new Dotenv({
        path: `./env/.env.${process.env.NODE_ENV}`,
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
          test: /\.(woff(2)?|otf|png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 2 * 1024,
              },
            },
          ],
          exclude: /(node_modules)/,
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              silent: false,
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['css-loader'], // 'style-loader', 
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

  webpackConfig.devServer = {
    contentBase: '/',
    hot: true,
    port,
    inline: true
  };

  return webpackConfig;
};
