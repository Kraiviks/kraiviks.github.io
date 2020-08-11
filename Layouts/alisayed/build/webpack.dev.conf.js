// Development config:

const webpack = require("webpack");
const { merge } = require('webpack-merge');
const baseWebpackConfig = require("./webpack.base.conf");


module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: '../dist',
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ]
});