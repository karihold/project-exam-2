const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.resolve(__dirname, './src');
const distPath = path.resolve(__dirname, './dist');
const jsPath = path.resolve(srcPath, './js');
const compontentsPath = path.resolve(jsPath, './components');
const scssPath = path.resolve(srcPath, './scss');
const htmlPath = path.resolve(srcPath, './html');

module.exports = (env) => ({
  entry: {
    app: [path.resolve(jsPath, './app.js'), path.resolve(scssPath, './main.scss')],
  },
  output: {
    filename: 'js/[name].js',
    path: distPath,
    publicPath: '/',
  },
  devtool: env.mode === 'dev' ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(jpg|png|svg|ico|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              regExp: /(images|fonts|icons)/,
              name: '[1]/[name].[ext]',
              outputPath: 'assets',
              esModule: false,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpgeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: env.mode === 'prod',
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new Dotenv(),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new HtmlWebpackPlugin({
      template: path.resolve(htmlPath, './index.html'),
      filename: 'index.html',
      chunks: ['react', 'app'],
    }),
  ],

  devServer: {
    open: true,
    writeToDisk: true,
    contentBase: distPath,
    port: '8080',
    historyApiFallback: true,
  },
});
