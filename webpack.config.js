const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const mode = process.env.NODE_ENV || 'production';
const isNeedBundleAnalyzer = process.env.BUNDLE_ANALYZER;
const isProdMode = process.env.NODE_ENV === 'production';

module.exports = {
  mode,
  devtool: 'source-map',
  entry: './src/index.ts',
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot|png|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.md$/,
        type: 'asset/source',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', // postcss loader needed for tailwindcss
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [postcssImport, tailwindcss(), autoprefixer],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProdMode ? '[name].[contenthash].css' : '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets',
          to: 'assets',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      title: 'Zelt profile editor',
    }),
    ...(isNeedBundleAnalyzer ? [new BundleAnalyzerPlugin()] : []),
  ],
};
