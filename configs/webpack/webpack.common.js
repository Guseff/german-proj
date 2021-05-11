const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { compilerOptions } = require('../../tsconfig');

const rootDir = path.resolve(__dirname, '../../');

module.exports = {
  entry: path.join(rootDir, 'src/index.tsx'),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      favicon: './src/assets/icons/favicons.png',
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './configs/netlify', to: './' },
        { from: './src/assets/posters', to: './posters' },
      ],
    }),
  ],
  output: {
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: '[name].[hash:8].bundle.js',
    path: path.join(rootDir, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]',
              },
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
