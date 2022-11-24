const { join, resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');

module.exports = {
  devtool: false,
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    static: {
      directory: join(__dirname, '../public'),
    },
    hot: true,
    port: 3001,
  },
  plugins: [
    // new BundleAnalayzerPlugin(),
    // 各个网段的web性能 2g 3g 4g
    // new Jarvis({
    //     port: 1337
    // })
    // 无论成功或者失败都会出现
    // new WebpackBuildNotifierPlugin({
    //     title: "kk的react脚手架",
    //     suppressSuccess: true
    // }),
    new webpack.SourceMapDevToolPlugin({
    }),
    new HtmlWebpackPlugin({
      title: 'kk-react-generator',
      filename: 'index.html',
      template: resolve(__dirname, '../public/index.html'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here'],
        notes: ['💊构建信息请及时关注窗口右上角'],
      },
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack构建失败',
          message: severity + ':' + error.name,
          subtitle: error.file || '',
          icon: 'https://boxcdn.zuoyebang.cc/v1/zyb-srmp/f08b9001/avatar.png',
        });
      },
    }),
  ],
  
};