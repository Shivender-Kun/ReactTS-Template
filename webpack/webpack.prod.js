const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",

  output: {
    publicPath: "/",
    assetModuleFilename: "[name][ext]",
    filename: "[name].[contenthash].js",
    sourceMapFilename: "[name].[contenthash].js.map",
  },

  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },

  module: {
    rules: [
      // sass, css rules with compression

      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /\.module\.s?css$/,
      },

      // sass, css module rules with compression

      {
        test: /\.module\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Codevolution"),
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CompressionPlugin({ algorithm: "gzip", test: /.js$|.css$|.map$/ }),
  ],
};
