const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",

  devServer: {
    static: {
      directory: "../build",
    },
    historyApiFallback: true,
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },

  module: {
    rules: [
      // sass, css rules

      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /\.module\.s?css$/,
      },

      // sass, css module rules

      {
        test: /\.module\.s?css$/,
        use: [
          "style-loader",
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
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas"),
    }),
  ],
};
