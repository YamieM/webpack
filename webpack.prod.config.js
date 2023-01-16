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
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const STYLES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".css"));

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    home: "./src/home.js",
    cart: "./src/cart.js",
    about_product: "./src/about_product.js",
  },
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
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
    filename: `./[name]/[name].[contenthash].js`,
  },
  plugins: [
    ...PAGES.map((page) =>
      page !== "index.html"
        ? new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.slice(0, -5)}/index.html`,
          })
        : new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src", "index.html"),
          })
    ),
    ...STYLES.map(
      (el) =>
        new MiniCssExtractPlugin({
          filename: `./${el.slice(0, -4)}/${el}`,
        })
    ),
  ],
};
