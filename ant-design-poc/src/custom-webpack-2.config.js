const path = require('path');

const AntdScssThemePlugin = require('antd-scss-theme-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production';

const config = {
//   devServer: {
//     clientLogLevel: 'info',
//     contentBase: './build/',
//     historyApiFallback: true,
//     overlay: {
//       errors: true,
//       warnings: false,
//     },
//     port: 9003,
//     publicPath: '/',
//     stats: {
//       modules: false,
//       chunks: false,
//     },
//   },
//   devtool: 'cheap-module-source-map',
//   entry: path.join(__dirname, 'src', 'index.jsx'),
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
  module: {
    rules: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules/,
    //     enforce: 'pre',
    //     loader: 'eslint-loader',
    //   },
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader',
    //   },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          AntdScssThemePlugin.themify({
            loader: 'sass-loader',
          }),
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: !isProduction,
            },
          },
          AntdScssThemePlugin.themify('less-loader'),
        ],
      },
    ],
  },
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'dist'),
//     publicPath: '/',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       inject: true,
//       template: './src/index.html',
//     }),
//     new AntdScssThemePlugin(path.join(__dirname, 'src', 'theme.scss')),
//   ],
  watchOptions: {
    ignored: /dist/,
  },
};


module.exports = config;
