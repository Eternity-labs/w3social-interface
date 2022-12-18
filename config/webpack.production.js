// 安装@type/webpack 方便

const { join, resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const os = require('os');
const Dotenv = require('dotenv-webpack');
const CSSMinizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  output: {
    path: join(__dirname, '../dist/'),
    publicPath: '/',
    filename: 'scripts/[contenthash:8].main.js',
    chunkFilename: 'scripts/[contenthash:8].chunk.js',
    assetModuleFilename: 'assets/[contenthash:8][ext]',
    clean: true,
  },
  optimization: {
    // 写了minimize为true并且minimizer为[]，webpack就会放弃自身的优化策略
    minimize: true,
    minimizer: [
      // esbuild替换吼，和webpack5的prepack有冲突。所以无法替换
      new TerserPlugin({
        parallel: os.cpus().length - 1,
      }),
      new CSSMinizerPlugin()
    ],
  },
  plugins:[
    new Dotenv({
      path: resolve(__dirname, './.env.prod'),
    }),
    new HtmlWebpackPlugin({
      title: 'we3Social',
      filename: 'index.html',
      template: resolve(__dirname, '../public/index.html'),
    }),
  ],
};
