const path = require("path");
// const webpack = require("webpack");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node-modules/
      }
    ]
  },
  resolve: {
    extesions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "boundle.js",
    path: path.resolve(__dirname, "dist")
  }
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     join: ["lodash", "join"]
  //   })
  //   // new CleanWebpackPlugin(),
  //   // new HtmlWebpackPlugin({
  //   //   title: "Production"
  //   // })
  // ],
};
