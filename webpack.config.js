const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");
const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  devtool,
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.html$/, use: "html-loader" },
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
