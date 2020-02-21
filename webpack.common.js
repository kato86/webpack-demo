const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    polyfills: "./src/polyfills.js",
    index: "./src/index.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      join: ["lodash", "join"]
    })
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: "Production"
    // })
  ],
  output: {
    filename: "[name].boundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
