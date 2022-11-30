// 安装@type/webpack 方便

const TerserPlugin = require('terser-webpack-plugin');
const os = require('os');
const { join } = require('path');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  output: {
    path: join(__dirname, '../dist/assets'),
    publicPath: './assets/[name].[contenthash:5].bundle.[ext]',
    assetModuleFilename: '',
  },
  optimization: {
    // 写了minimize为true并且minimizer为[]，webpack就会放弃自身的优化策略
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: os.cpus().length - 1,
      })
    ],
  },
  plugins:[
  ],
};
