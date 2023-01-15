const fs = require("fs");
const path = require("path");
const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist"),
  assets: "./assets/",
};
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");
const PAGES_DIR = `${PATHS.src}`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".html"));
module.exports = {
  entry: {
    index: "./src/index.js",
    // about: "./src/about.js",
    // home: "./src/about.js",
    // cart: "./src/cart.js",
    // aboutProduct: "./src/about_product.js",
  },
  devtool: "source-map",
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
    filename: "[name].js",
  },
  plugins: [
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page}/${page.replace(/\.js/, ".html")}`,
        })
    ),
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: path.resolve(__dirname, "src", "index.html"),
    //   chunks: ["index"],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "cart.html",
    //   template: path.resolve(__dirname, "src", "cart.html"),
    //   chunks: ["index"],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "about.html",
    //   template: path.resolve(__dirname, "src", "about.html"),
    //   chunks: ["index"],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "home.html",
    //   template: path.resolve(__dirname, "src", "home.html"),
    //   chunks: ["index"],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "about_product.html",
    //   template: path.resolve(__dirname, "src", "about_product.html"),
    //   chunks: ["index"],
    // }),
  ],
};
