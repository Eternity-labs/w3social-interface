const { resolve } = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const Webpackbar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackBaseConfig = {
  cache: {
    type: 'filesystem',
  },
  entry: {
    main: resolve('src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader'
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@apis': resolve('src/apis'),
      '@pages': resolve('src/pages'),
      '@utils': resolve('src/utils'),
      '@hooks': resolve('src/hooks'),
      '@routes': resolve('src/routes'),
      '@states': resolve('src/states'),
      '@type': resolve('src/types'),
      '@config': resolve('src/config'),
      '@layouts': resolve('src/layouts'),
      '@constants': resolve('src/constants'),
      '@connector': resolve('src/connector'),
      '@abis': resolve('src/abis'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
    extensions: ['.js', '.ts', '.tsx', 'jsx', 'json'],
  },
  plugins: [
    new Webpackbar(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css',
    }),
  ],
};
module.exports = merge.default(webpackBaseConfig, _mergeConfig);
