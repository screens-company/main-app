'use strict';

const Path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (options) => {
  const rootPath = Path.join(__dirname);
  const dest = Path.join(__dirname, 'dist');

  let webpackConfig = {
    devtool: 'cheap-eval-source-map',
    entry: ['./src/index.tsx'],
    output: {
      path: dest,
      filename: 'bundle.[hash].js'
    },
    mode: process.env.NODE_ENV,
    module: {
      rules: [
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
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        '@': Path.join(rootPath, 'src'),
      },
    },
    plugins: [
      new Dotenv({
        path: `./env/.env.${process.env.NODE_ENV}`,
      })
    ]
  };

  return webpackConfig;
};
