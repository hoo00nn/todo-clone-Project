const path = require("path");
const webpack = require('webpack');
const banner = require("./banner.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: "development",
  entry: {
    user: path.join(__dirname, "./src/javascripts/signin.js"),
    board: path.join(__dirname, './src/javascripts/board.js'),
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./src/bundle"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader', // url 로더를 설정한다
          options: {
            publicPath: './dist/', // file-loader와 동일
            name: '[name].[ext]?[hash]', // file-loader와 동일
            limit: 5000 // 5kb 미만 파일만 data url로 처리
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // 바벨 로더를 추가한다
      }
    ],
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
    ? [new MiniCssExtractPlugin({ filename : `[name].css` })]
    : []),
    new HtmlWebpackPlugin({
      title: 'todo 로그인',
      filename : 'index.html',
      template: './src/index.html',
      chunks: ['user'],
    }),
    new HtmlWebpackPlugin({
      title: 'todo 회원가입',
      filename : 'signup.html',
      template: './src/signup.html', 
      chunks: ['user'],
    }),
    new HtmlWebpackPlugin({
      title: 'todo 페이지',
      filename : 'board.html',
      template: './src/board.html', 
      chunks: ['board'],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "./src/bundle"),
    publicPath: "/",
    host: "localhost",
    overlay: true,
    port: 9000,
    stats: "errors-only",
    historyApiFallback: true,
  },
}