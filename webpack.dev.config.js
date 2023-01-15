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
  mode: "development",
  // devtool: "source-map",
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    home: "./src/about.js",
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
    ],
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
    port: 8080,
    open: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: `./[name]/[name].js`,
  },
  plugins: [
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.slice(0, -5)}/index.html`,
        })
    ),
  ],
};
