const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EnvironmentPlugin, ProvidePlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "../src");
const BUILD_DIR = path.resolve(__dirname, "../build");

module.exports = {
  entry: `${APP_DIR}/main.tsx`,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    clean: true,
    path: BUILD_DIR,
  },

  module: {
    rules: [
      // ts, tsx, js, jsx rules
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/public/index.html`,
      hash: true,
      cache: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: `${APP_DIR}/public/robots.txt`, to: BUILD_DIR },
        { from: `${APP_DIR}/public/manifest.json`, to: BUILD_DIR },
      ],
    }),
    // new EnvironmentPlugin(env),
    // new ProvidePlugin({ process: "process/browser" }),
  ],
  // stats: "errors-only",
};
