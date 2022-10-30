const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EnvironmentPlugin, ProvidePlugin } = require("webpack");
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
    // new EnvironmentPlugin(env),
    // new ProvidePlugin({ process: "process/browser" }),
  ],
  // stats: "errors-only",
};
