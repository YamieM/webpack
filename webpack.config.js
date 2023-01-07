const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.html$/, use: "html-loader" },
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
    ],
  },
  devServer: {
    open: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
